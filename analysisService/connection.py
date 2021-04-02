import os
import uuid
import pymongo

os.environ["MONGO_DB_USER"] = "dev"
os.environ["MONGO_DB_PASS"] = "j16c8SXcLTlIty1R"
os.environ["MONGO_DB_NAME"] = "articles"
os.environ["MONGO_COLLECTION_NAME"] = "ingest1"
os.environ["MONGO_DB_URL"] = "mongodb+srv://dev:j16c8SXcLTlIty1R@cluster0.uwf3u.mongodb.net/articles?retryWrites=true&w=majority"

# Fetch mongo env vars
usr = os.environ['MONGO_DB_USER']
pwd = os.environ['MONGO_DB_PASS']
mongo_db_name = os.environ['MONGO_DB_NAME']
mongo_collection_name = os.environ['MONGO_COLLECTION_NAME']
url = os.environ['MONGO_DB_URL']
# Connection String
client = pymongo.MongoClient("mongodb+srv://dev:{}@cluster0.uwf3u.mongodb.net/{}?retryWrites=true&w=majority".format(pwd, mongo_db_name))
db = client[mongo_db_name]
collection = db[mongo_collection_name]

