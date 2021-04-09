import os
import uuid
import pymongo

# Connection String
client = pymongo.MongoClient(os.environ['MONGO_DB_URL'])
db = client[os.environ["MONGO_DB_NAME"]]
collection = db["articles"]


