import os
import uuid
import pymongo

# Connection String
client = pymongo.MongoClient(os.environ['MONGO_DB_URL'])
db = client[mongo_db_name]
collection = db[mongo_collection_name]

