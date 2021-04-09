import requests
from bson.objectid import ObjectId
import hashlib
import connection
import pymongo
import datetime
import pymongo
import os


class NytIngest:

    API_KEY = os.environ["API_KEY"]
    DOMAIN = "https://api.nytimes.com/svc/archive/v1/{}/{}.json"
    ENDPOINT = "{}?api-key={}".format(DOMAIN, API_KEY)
    
    def __init__(self):
        pass

    def makeRequest(self, year, month):
        data = requests.get(self.ENDPOINT.format(year, month))
        print("Made request")
        return data

    def startRequests(self, startYear, endYear, startMonth = 0, endMonth = 12):
        for year in range(startYear, endYear):
            for month in range(startMonth+1,endMonth+1):
                data = self.makeRequest(year, month)
                inserted = self.processData(data)
                print("Inserted {} articles".format(len(inserted)))

    def processData(self, data):
        print("Processing data")
        articles = data.json()["response"]["docs"]
        toInsert = []
        for article in articles:
            toInsert.append(self.processArticle(article))
        self.storeData(toInsert)
        return toInsert
        pass

    def processArticle(self, article):
        images = ["https://www.nytimes.com/{}".format(multimedia["url"]) for multimedia in article["multimedia"] if multimedia["type"]=="image"]
        pubDate = datetime.datetime.strptime(article["pub_date"], "%Y-%m-%dT%H:%M:%S%z")
        try:
            articleJson = {
                "_id": self.genObjectId(article["web_url"]),
                "additional_data": {},
                "authors": ["{} {}".format(person["firstname"], person["lastname"]) for person in article["byline"]["person"]],
                "canonical_link": article["web_url"],
                "images": images,
                "keywords": article["keywords"],
                # "link_hash": article["link_hash"],
                "meta_data": {
                    # "viewport": "width=device-width, initial-scale=1.0, minimum-scale=1.0",
                    "section": article["section_name"],
                    # "referrer": "unsafe-url",
                    "og": {
                        "pubdate": pubDate,
                        "url": article["web_url"],
                        "title": article["headline"]["main"] if "main" in article["headline"] else "",
                        "description": article["lead_paragraph"],
                        "site_name": article["source"],
                        "type": article["document_type"],
                    },
                    "pubdate": pubDate,
                    "author": ", ".join(["{} {}".format(person["firstname"], person["lastname"]) for person in article["byline"]["person"]]) if "byline" in article else "",
        
                    "description": article["abstract"] or article["snippet"],
                    "keywords": ", ".join([keyword["value"] for keyword in article["keywords"]]),
                    "thumbnail": ([""]+[multimedia["url"] for multimedia in article["multimedia"] if "subType" in multimedia and multimedia["subType"]=="thumbLarge" or multimedia["subType"]=="thumbnail"])[-1],
                    "vr": {
                        "canonical": article["web_url"] if "web_url" in article else ""
                    },
                    "article": {
                        "opinion": "true" if "section_name" in article and article["section_name"] == "Opinion" else "false",
                    },
                },
                "meta_description": article["abstract"] if "abstract" in article else article["snippet"] if "snippet" in article else "",
                "meta_favicon": "/vi-assets/static-assets/favicon-dark-c0de2ee21c5d303cad570e8565f03f1d.ico",
                "meta_img": images[0] if len(images)>0 else "",
                "meta_keywords": [keyword["value"] for keyword in article["keywords"]] if "keywords" in article else "",
                "meta_lang": "",
                "movies": [],
                "publish_date": pubDate,
                "source_url": "https://www.nytimes.com",
                "summary": "",
                "text": article["lead_paragraph"] if "lead_paragraph" in article else "",
                "title": article["headline"]["main"] if "headline" in article and "main" in article["headline"] else "",
                "top_image": images[0] if len(images)>0 else "",
                "url": article["web_url"]
                }
        except:
            import pdb; pdb.set_trace()
        return articleJson
        pass

    def genObjectId(self, s):
        return ObjectId(hashlinb.shake_128(str(s).encode('utf-8')).digest(12))

    def storeData(self, data):
        print("Storing data")
        try:
            connection.collection.insert_many(data, ordered=False)
        except pymongo.errors.BulkWriteError:
            print('Duplicates were found.')
            return
        pass



ingest = NytIngest()
ingest.startRequests(2016, 2021, 0, 12)
