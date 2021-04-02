import AWS from "aws-sdk";
import { String } from "aws-sdk/clients/cloudwatchevents";
import amqp from "amqplib/callback_api";
import User from "../../../../database/models/user";
import { shake128 } from "js-sha3";
const ObjectId  = require('mongodb').ObjectID;
const uuid = require("uuid");
AWS.config.region = "us-east-1";
var lambda = new AWS.Lambda();

const rabbitUri =
  "amqp://admin:adminpass@ec2-52-207-231-70.compute-1.amazonaws.com:5672";
export class RabbitProvider {
  // static pythonSearch = async (keywords: String[]) => {
  //   let np = new Promise((resolve, reject) => {
  //     //Connect to rabbitMq
  //     const queue = "handleSearchRabbit";
  //     amqp.connect(rabbitUri, function (error0, connection) {
  //       if (error0) {
  //         reject(error0);
  //       }
  //       console.log(" [x] Connection Established");

  //       //Create channel if does not exist
  //       connection.createChannel(function (error1, channel) {
  //         if (error1) {
  //           reject(error1);
  //         }
  //         try {
  //           console.log(" [x] Channel Created");

  //           //Create message
  //           var data = {
  //             handleSearchRabbit: { keywords },
  //             uid: uuid.v4(),
  //             nextQueue: ["replyQueue"],
  //           };

  //           //Init queue
  //           channel.assertQueue(queue, {
  //             durable: true,
  //             arguments: {
  //               "x-dead-letter-exchange": `${queue}-dead-letter`,
  //             },
  //           });

  //           const sendResult = channel.sendToQueue(
  //             queue,
  //             Buffer.from(JSON.stringify(data)),
  //             {
  //               persistent: true,
  //             }
  //           );
  //           // connection.close();
  //           console.log(" [x] Sent %s %s", data, sendResult);

  //           resolve(data);
  //         } catch (error3) {
  //           reject(error3);
  //         }
  //       });
  //     });
  //   });

  //   return np.catch((e) => console.log(e));
  // };

  static processUrl = async (url: String, userId: String) => {
    let np = new Promise((resolve, reject) => {
      //Connect to rabbitMq
      const queue = "ingestUrlArticleRabbit";
      amqp.connect(rabbitUri, function (error0, connection) {
        if (error0) {
          reject(error0);
        }
        console.log(" [x] Connection Established");

        //Create channel if does not exist
        connection.createChannel(async function (error1, channel) {
          if (error1) {
            reject(error1);
          }
          try {
            console.log(" [x] Channel Created");

            //Create message
            var data = {
              ingestUrlArticleRabbit: {
                url,
              },
              handleSearchRabbit:{
                num: 10
              },
              uid: userId,
              nextQueue: ["comprehendServiceRabbit", "handleSearchRabbit", "userServiceRabbit", "replyQueue"],
              userId
            };
            //Init queue
            channel.assertQueue(queue, {
              durable: true,
              arguments: {
                "x-dead-letter-exchange": `${queue}-dead-letter`,
              },
            });

            let articlePath= `bookmarks.${shake128(url, 256).slice(0,24)}`
            let userOid = new ObjectId(userId)
            let user = await User.findOne({"$and":[{"_id":userOid}, {[articlePath]:{"$exists":true}}]})
            const sendResult = channel.sendToQueue(
              queue,
              Buffer.from(JSON.stringify(data)),
              {
                persistent: true,
              }
            );
            // connection.close();
            console.log(" [x] Sent %s %s", data, sendResult);

            
            resolve({...data, bookmarked: user != null});
          } catch (error3) {
            reject(error3);
          }
        });
      });
    });

    return np.catch((e) => console.log(e));
  };
}
