import json
import boto3
import os
import pika


rabbitUri = os.environ['RABBIT_URI']


class AwsComprehend:
    def __init__(self):
        pass

    #Bulk Comprehend URLS
    def comprehendUrls(self, urls):
        return [self.comprehendUrl(url) for url in urls]

    # Comprehend individual URL
    def comprehendUrl(self, event):
        print("Comprehending")
        article = None
        title = None
        publish_date = None
        top_image = None
        authors = None
        link = None
        if "article" not in event:
            raise Exception("Article data not found")
        else:
            article = event["article"]
            title = article["title"]
            text = article["text"]
            publish_date = str(article["publish_date"])
            top_image = article["top_image"]
            authors = article["authors"]
            link = article["canonical_link"]
        print(article)
        comprehend = self.comprehendText(" ".join([title, text])[:4000])
        # Generate query string
        comprehend["KeyPhrases"] = sorted(
            comprehend["KeyPhrases"], key=lambda phrase: phrase["Score"])
        comprehend["SearchString"] = [title]+[*map(lambda phrase: phrase["Text"].replace(
            "'", "") if phrase["Score"] > 0.7 else "", comprehend["KeyPhrases"][::-1][:10])]
        comprehend["article"] = {
            "title": title,
            "publish_date": publish_date,
            "top_image": top_image,
            "text": text,
            "authors": authors,
            "link": link
        }
        return comprehend

    #Comprehend text
    def comprehendText(self, text):
        print("Comprehending text")
        comprehend = boto3.client(
            service_name='comprehend', region_name='us-east-1')
        result = comprehend.detect_key_phrases(Text=text, LanguageCode='en')
        return result


# Process trigger event
def main(eventMain, context):
    event = eventMain["comprehendServiceRabbit"]
    ac = AwsComprehend()
    toReturn = ac.comprehendUrl(event)
    eventMain["comprehendServiceRabbit"]["result"] = toReturn
    if "handleSearchRabbit" not in eventMain:
        eventMain["handleSearchRabbit"] = {}
    if "keywords" not in eventMain["handleSearchRabbit"]:
        eventMain["handleSearchRabbit"]["keywords"] = toReturn["SearchString"]
    return sentToNextQueue(eventMain)

# Add to next queue if needed
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


