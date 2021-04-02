import os
import uuid
import pymongo

os.environ["MONGO_DB_USER"] = "dev"
os.environ["MONGO_DB_PASS"] = "j16c8SXcLTlIty1R"
os.environ["MONGO_DB_NAME"] = "articles"

# Fetch mongo env vars
usr = os.environ['MONGO_DB_USER']
pwd = os.environ['MONGO_DB_PASS']
mongo_db_name = os.environ['MONGO_DB_NAME']
# Connection String
client = pymongo.MongoClient("mongodb+srv://{}:{}@cluster0.uwf3u.mongodb.net/{}?retryWrites=true&w=majority".format(usr,pwd, mongo_db_name))
db = client[mongo_db_name]
search = db["search"]
user = db["users"]


