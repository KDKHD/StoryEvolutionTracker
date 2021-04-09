import json
from requests import get
from bs4 import BeautifulSoup
from datetime import datetime
import pika
import os


rabbitUri = os.environ['RABBIT_URI']

#Modified from https://pypi.org/project/googlesearch-python/
class GoogleDork:

    def __init__(self):
        pass

    def search(self, term, date_min=False, date_max=False, start=0, num_results=10, lang="en"):
        # Set up headers
        usr_agent = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
            'Chrome/61.0.3163.100 Safari/537.36'}

        # Make dork
        def fetch_results():
            escaped_search_term = term.replace(' ', '+')

            # Convert dates
            date_min_parsed = datetime.strptime(
                date_min, "%Y-%m-%d %X") if date_min else False
            date_max_parsed = datetime.strptime(
                date_max, "%Y-%m-%d %X") if date_max else False

            # Compose date string
            d_string = "&tbs=cdr:1{}{}".format(",cd_min:{}".format(date_min_parsed.strftime(
                '%m/%d/%Y')) if date_min else "", ",cd_max:{}".format(date_max_parsed.strftime('%m/%d/%Y')) if date_max else "") if date_min or date_max else ""
            # Compose search url
            google_url = 'https://www.google.com/search?q={}&num={}&start={}&hl={}{}'.format(escaped_search_term, num_results+1, start,
                                                                                             lang, d_string)
            print("Query url {}".format(google_url))
            # Make request
            response = get(google_url, headers=usr_agent)
            response.raise_for_status()

            return response.text

        # Parse result data
        def parse_results(raw_html):
            soup = BeautifulSoup(raw_html, 'html.parser')
            result_block = soup.find_all('div', attrs={'class': 'g'})

            for result in result_block:
                link = result.find('a', href=True)
                title = result.find('h3')
                if link and title:
                    publish_date = None
                    try:
                        publish_date = result.find(
                            'span', attrs={'class': 'f'}).getText().replace("—", "").strip()
                        result.select(
                            "div[data-hveid] > div")[1].select("span")[0].select("span")[0].decompose()
                    except:
                        pass
                    yield {
                        "link": link['href'],
                        "title": title.getText(),
                        "description": result.select("div[data-hveid] > div")[1].prettify(formatter="html"),
                        'publish_date': publish_date}

        html = fetch_results()
        return list(parse_results(html))

    # Wrapper function
    def dork(self, keywords, date_min=False, date_max=False, start=0, num_results=10):
        return self.search(" ".join(keywords), date_min=date_min, date_max=date_max, start=start, num_results=num_results)

# Handle main trigger
def main(eventMain, context):
    event = eventMain["handleSearchRabbit"]
    gd = GoogleDork()
    toReturn = gd.dork(keywords=event.get("keywords", []), date_min=event.get("date_min", None), date_max=event.get("date_max", None), start=event.get(
        "start", 0), num_results=event.get("num", 10))
    eventMain["handleSearchRabbit"]["result"] = toReturn
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

