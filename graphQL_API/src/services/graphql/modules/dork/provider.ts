import AWS from "aws-sdk";
import { String } from "aws-sdk/clients/cloudwatchevents";

AWS.config.region = "us-east-1";
var lambda = new AWS.Lambda();

export class DorkProvider {
  static dorkByKeywords = (keywords: String[]) => {
    let payload = { keywords: keywords };

    let params = {
      FunctionName: "dorkingservice-dev-hello", // the lambda function we are going to invoke
      InvocationType: "RequestResponse",
      LogType: "Tail",
      Payload: JSON.stringify(payload),
    };

    return lambda
      .invoke(params)
      .promise()
      .then((result) => JSON.parse(result.Payload as string))
      .then((parsed) => {
        if ("errorType" in parsed) {
          console.log(parsed);
          throw Error(parsed.errorMessage);
        }
        parsed["body"] = JSON.parse(parsed["body"]);
        return parsed;
      });
  };
}
