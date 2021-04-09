import AWS from "aws-sdk";
import { String } from "aws-sdk/clients/cloudwatchevents";
import DataLoader from "dataloader";
import { shake128 } from "js-sha3";
import Article from "../../../../database/models/article";
import { mapReduce } from "../../utils/dataloaderHelpers";

AWS.config.region = "us-east-1";
var lambda = new AWS.Lambda();

export class ArticleProvider {
  static getOrIngestArticles = new DataLoader(async (urls: String[]) => {
    let hashed = urls.map((url) => shake128(url, 96));
    let articles = await Article.find({
      _id: {
        $in: hashed,
      },
    }).lean();
    let mapped = mapReduce(articles, hashed, "_id");

    let newLinks = mapped
      .map((data, i) => ({ data, url: urls[i] }))
      .filter((x) => x.data == null)
      .map((x) => x.url);
    ArticleProvider.ingestArticleByUrl(newLinks);

    return mapped.map((article, i) => ({
      status: article ? 200 : 400,
      message: article
        ? `Success.`
        : `Article ${hashed[i]} being processed.`,
      article: article,
    }));
  });

  static ingestArticleByUrl = (urls: String[] | String) => {
    let payload = { bulkUrls: Array.isArray(urls) ? urls : [urls] };

    let params = {
      FunctionName: "injestservice-dev-hello", 
      InvocationType: "RequestResponse",
      LogType: "Tail",
      Payload: JSON.stringify(payload),
    };

    return lambda
      .invoke(params)
      .promise()
      .then((result) => JSON.parse(result.Payload as string))
      .then((parsed) => {
        if ("errorType" in parsed) throw Error(parsed.errorMessage);
        parsed["body"] = JSON.parse(parsed["body"]);
        return parsed;
      });
  };
}
