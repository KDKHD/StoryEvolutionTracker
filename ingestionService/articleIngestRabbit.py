import json
from newspaper import Article
import os
import pika
import datetime

rabbitUri = os.environ['RABBIT_URI']

# Keys we are interested in
keys = ['additional_data',
        'authors',
        'canonical_link',
        'images',
        'keywords',
        'link_hash',
        'meta_data',
        'meta_description',
        'meta_favicon',
        'meta_img',
        'meta_keywords',
        'meta_lang',
        'movies',
        'publish_date',
        'source_url',
        'summary',
        'text',
        'title',
        'top_image',
        'url']

class IngestUrlArticle:
    def __init__(self):
        pass

    def getArticle(self, url):
        print("Parsing article")
        article = Article(url)
        article.download()
        article.parse()
        
        toReturn = {}

        for key in keys:
            val = getattr(article, key)
            if isinstance(val, set):
                val = list(val)
            if isinstance(val, datetime.date):
                val = val.strftime("%Y-%m-%d %H:%M:%S")
            toReturn[key] = val
        return toReturn

def main(eventMain, context):
    event = eventMain["ingestUrlArticleRabbit"]
    ia = IngestUrlArticle()
    toReturn = ia.getArticle(event["url"])
    eventMain["ingestUrlArticleRabbit"]["result"] = toReturn
    if "comprehendServiceRabbit" not in eventMain:
        eventMain["comprehendServiceRabbit"] = {}
    if "article" not in eventMain["comprehendServiceRabbit"]:
        eventMain["comprehendServiceRabbit"]["article"] = toReturn
    return sentToNextQueue(eventMain)

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
