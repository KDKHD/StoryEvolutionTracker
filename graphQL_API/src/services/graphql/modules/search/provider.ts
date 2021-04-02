import AWS from "aws-sdk";

AWS.config.region = "us-east-1";
var lambda = new AWS.Lambda();

export class SearchProvider {
  static searchString = (
    keywords: String[],
    { num = 10, start = 0, date_min, date_max }
  ) => {
    let payload = {
      keywords: [keywords],
      num,
      start,
      ...(date_min != null && { date_min }),
      ...(date_max != null && { date_max }),
    };
    let params = {
      FunctionName: "dorkingservice-dev-pythonSearch",
      InvocationType: "RequestResponse",
      LogType: "Tail",
      Payload: JSON.stringify(payload),
    };

    return lambda
      .invoke(params)
      .promise()
      .then((result) => JSON.parse(result.Payload as string))
      .then((parsed) => {
        return JSON.parse(parsed);
      });
  };
}
