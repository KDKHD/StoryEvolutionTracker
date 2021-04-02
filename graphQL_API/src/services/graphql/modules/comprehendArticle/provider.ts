import AWS from "aws-sdk";

AWS.config.region = "us-east-1";
var lambda = new AWS.Lambda();

export class ComprehendProvider {
  static comprehendUrl = (urls: String[] | String) => {
    let payload = { bulkUrls: Array.isArray(urls) ? urls : [urls] };

    let params = {
      FunctionName: "injestservice-dev-awscomprehend",
      InvocationType: "RequestResponse",
      LogType: "Tail",
      Payload: JSON.stringify(payload),
    };

    return lambda
      .invoke(params)
      .promise()
      .then((result) => JSON.parse(result.Payload as string))
      .then((parsed) => {
        console.log(parsed)
        return JSON.parse(parsed);
      });
  };
}
