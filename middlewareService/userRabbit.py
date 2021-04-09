import json
import os
import connection
from bson.objectid import ObjectId
import hashlib
import pymongo
import pika
from emailService import SendEmail

rabbitUri = os.environ['RABBIT_URI'];

class UserService:

    def __init__(self):
        pass

    # Adds history record
    def addHistory(self, articleId, userId):
        connection.user.update_one({'_id': ObjectId(userId)}, {'$push': {'history': articleId}}, upsert = True)
        pass

    # Clears notifications
    def clearNotification(self, articleId, userId):
        connection.user.update_one({"$and":[{'_id': ObjectId(userId)}, {"bookmarks.{}".format(str(articleId)):{"$exists": "true"}}]}, {"$set":{"bookmarks.{}".format(str(articleId)): 0}})
        pass

    # Add similarity results
    def addResult(self, article):
        objId = ObjectId(self.genObjectId(article["link"]))
        try:
            new = connection.search.insert_one({
                "_id": objId,
                "url":article["link"],
                "title":article["title"],
                "text":article["description"],
                "publish_date":article["publish_date"],
            })
        except pymongo.errors.DuplicateKeyError:
            pass
        return objId

    # Parse similarity data
    def insertAllSimilar(self, articles):
        data = articles["result"]
        ids = [self.addResult(article) for article in data]
        return ids
        
    # Add new similar article
    def addSimilar(self, article, ids):
        objId = self.genObjectId(article["url"])
        result = article["result"]
        
        try:
            new = connection.search.insert_one({
                "_id": objId,
                "url":article["url"],
                "title":result["title"],
                "text":result["text"],
                "publish_date":result["publish_date"],
            })
        except pymongo.errors.DuplicateKeyError:
            pass
        x = connection.search.update_one({'_id': objId}, {'$addToSet': {'similar': { "$each": ids }}})
        if x.modified_count > 0:
            connection.user.update_one({"bookmarks.{}".format(str(objId)):{"$exists": "true"}},{"$inc":{"bookmarks.{}".format(str(objId)):x.modified_count}})
            #Send email
            usersToNotify = connection.user.find({"bookmarks.{}".format(str(objId)):{"$exists": "true"}})
            for document in usersToNotify:
                SendEmail.send(document["email"])
        return objId 

    # Apply different functions to final data
    def processResults(self, event):
        ingestUrlArticleRabbit = event["ingestUrlArticleRabbit"]
        handleSearchRabbit = event["handleSearchRabbit"]
        similarIds = self.insertAllSimilar(handleSearchRabbit)
        articleId = self.addSimilar(ingestUrlArticleRabbit, similarIds)
        self.addHistory(articleId, event["uid"])
        self.clearNotification(articleId, event["uid"])

    def genObjectId(self, s):
        return ObjectId(hashlib.shake_128(str(s).encode('utf-8')).digest(12))

# Handle trigger event
def main(eventMain, context):
    gd = UserService()
    gd.processResults(eventMain)
    return sentToNextQueue(eventMain)

# Send to next queue if needed
def sentToNextQueue(event):
    print("sentToNextQueue")
    if "nextQueue" in event and len(event["nextQueue"]) > 0:
        nextQueue = event["nextQueue"].pop(0)

        parameters = pika.URLParameters(rabbitUri)
        connection = pika.BlockingConnection(parameters)
        channel = connection.channel()
        channel.confirm_delivery()
        channel.queue_declare(queue=nextQueue, durable=True, arguments={
                              "x-dead-letter-exchange": "{}-dead-letter".format(nextQueue)})
        channel.basic_publish(exchange='',
                              routing_key=nextQueue,
                              body=json.dumps(event),
                              properties=pika.BasicProperties(delivery_mode=2)
                              )
        connection.close()

        print(" [x] Sent {} to {} queue".format("", nextQueue))
    else:
        print("No nextQueue. Message died")
    return event

