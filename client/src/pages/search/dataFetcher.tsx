import { Client } from "@stomp/stompjs";
import { gql as GQL } from "@apollo/client";
import { default as apolloClient } from "../../util/apolloClient";

const brokerURL = "ws://ec2-52-207-231-70.compute-1.amazonaws.com:15674/ws";
const login = "client";
const passcode = "clientpass";

const QUERY_ARTICLE = GQL`
    query Similar($url: String!){
        processUrl(url:$url){
          uid
          nextQueue
          bookmarked
        }
    }  
`;

const client = new Client({
  brokerURL,
  connectHeaders: {
    login,
    passcode,
  },
  debug: function (str) {
    console.log(str);
  },
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
});

const rabbitListener = (uid): Promise<any> => {
  return new Promise((resolve, reject) => {
    client.onConnect = function (frame) {
      // Do something, all subscribes must be done is this callback
      // This is needed because this will be executed after a (re)connect
      const callback = async function (message) {
        // called when the client receives a STOMP message from the server
        if (message.body) {
          let parsedMessage = JSON.parse(message.body);
          if (parsedMessage.uid === uid) {
            resolve(parsedMessage);
            await client.deactivate();
          }
        }
      };

      client.subscribe("replyQueue", callback, {
        "x-dead-letter-exchange": "replyQueue-dead-letter",
      });
    };

    client.onStompError = function (frame) {
      console.log("Broker reported error: " + frame.headers["message"]);
      console.log("Additional details: " + frame.body);
    };
    client.activate();
  });
};

const FetchData = async (
  url
): Promise<{ queryUid: string, response: Promise<any>, bookmarked: Boolean }> => {
  let data = await apolloClient
    .query({ query: QUERY_ARTICLE, variables: { url } })
    .then((res) => res.data);
  let queryUid = data.processUrl.uid;
  let bookmarked = data.processUrl.bookmarked;

  return { queryUid, response: rabbitListener(queryUid), bookmarked };
};

// const FetchMore = (uid): Promise<any> => {
//   return new Promise((resolve, reject) => {
//     client.onConnect = function (frame) {
//       client.publish({
//         destination: "handleSearchRabbit",
//         body: JSON.stringify({
//           handleSearchRabbit: {
//             keywords: [""],
//             start: 10,
//             num: 20,
//           },
//           nextQueue: ["replyQueue"],
//         }),
//       });
//       // Do something, all subscribes must be done is this callback
//       // This is needed because this will be executed after a (re)connect
//       const callback = async function (message) {
//         // called when the client receives a STOMP message from the server
//         if (message.body) {
//           let parsedMessage = JSON.parse(message.body);
//           if (parsedMessage.uid === uid) {
//             resolve(parsedMessage);
//             await client.deactivate();
//           }
//         }
//       };

//       client.subscribe("replyQueue", callback, {
//         "x-dead-letter-exchange": "replyQueue-dead-letter",
//       });
//     };

//     client.onStompError = function (frame) {
//       console.log("Broker reported error: " + frame.headers["message"]);
//       console.log("Additional details: " + frame.body);
//     };
//     client.activate();
//   });
// };

export { FetchData };
