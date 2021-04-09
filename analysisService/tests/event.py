
import unittest
import os
os.environ["RABBIT_URI"] = "amqp://admin:adminpass@${file(../config.json):PUBLIC_IP}:5672"

import keyPhraseRabbit

event = {"comprehendServiceRabbit": {
        "article": {
            "title": "test",
            "text": "test",
            "publish_date": "test",
            "top_image": "test",
            "authors": "test",
            "canonical_link": "test"}},
        "nextQueue": ["replyQueue"]
        }

class TestEvent(unittest.TestCase):
    
    def test_event(self):
        res = keyPhraseRabbit.main(event, None)
        self.assertTrue("comprehendServiceRabbit" in res)
        

if __name__ == '__main__':
    unittest.main()