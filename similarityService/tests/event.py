import unittest
import os
os.environ["RABBIT_URI"] = "amqp://admin:adminpass@${file(../config.json):PUBLIC_IP}:5672"

import googleDorkRabbit

event = {
    "handleSearchRabbit": {
        "keywords": ["the stroller the death a stroller the stairs the birth the bottom her mother the cause the city Ms. Goodson"],
        # "date_max": "2019-01-30 00:00:00",
    },
    "nextQueue": []
}

class TestEvent(unittest.TestCase):
    
    def test_event(self):
        res = googleDorkRabbit.main(event, None)
        self.assertTrue("handleSearchRabbit" in res)
        self.assertTrue("result" in res["handleSearchRabbit"])
        self.assertTrue(len(res["handleSearchRabbit"]["result"])>0)
        self.assertTrue("link" in res["handleSearchRabbit"]["result"][0])
        self.assertTrue("title" in res["handleSearchRabbit"]["result"][0])
        self.assertTrue("description" in res["handleSearchRabbit"]["result"][0])
        self.assertTrue("publish_date" in res["handleSearchRabbit"]["result"][0])

if __name__ == '__main__':
    unittest.main()