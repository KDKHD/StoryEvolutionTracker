import unittest
import os
os.environ["RABBIT_URI"] = "amqp://admin:adminpass@${file(../config.json):PUBLIC_IP}:5672"

import articleIngestRabbit

event = {"ingestUrlArticleRabbit": {
    "url": "https://www.nytimes.com/2019/01/30/nyregion/mother-falls-down-subway-stairs-death.html"},
    "nextQueue": []
}

class TestEvent(unittest.TestCase):
    
    def test_event(self):
        res = articleIngestRabbit.main(event, None)
        self.assertTrue("ingestUrlArticleRabbit" in res)
        self.assertTrue("comprehendServiceRabbit" in res)
        self.assertTrue("article" in res["comprehendServiceRabbit"])
        self.assertTrue('additional_data' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('authors' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('canonical_link' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('images' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('keywords' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('link_hash' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('meta_data' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('meta_description' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('meta_favicon' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('meta_img' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('meta_keywords' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('meta_lang' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('movies' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('publish_date' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('source_url' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('summary' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('text' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('title' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('top_image' in res["comprehendServiceRabbit"]["article"])
        self.assertTrue('url' in res["comprehendServiceRabbit"]["article"])

if __name__ == '__main__':
    unittest.main()