
const rabbitUri =
  "amqps://graphQL:KennethKreindler4@b-9a2b98d3-e27b-463b-9596-a3da268c688e.mq.us-east-1.amazonaws.com:5671";
  var amqp = require('amqplib/callback_api');

  amqp.connect(rabbitUri, function(error0, connection) {
      if (error0) {
          throw error0;
      }
      connection.createChannel(function(error1, channel) {
          if (error1) {
              throw error1;
          }
  
          var queue = 'eventDorkPythonSearch';
          var data = {
            keywords: ["Apple"],
            uid: 5,
            nextQueue: ["replyQueue"],
          };  
          channel.assertQueue(queue, {
              durable: true,
              arguments: {
                'x-dead-letter-exchange': 'eventDorkPythonSearch-dead-letter',
                // 'x-dead-letter-routing-key': 'rk1',
                // 'x-message-ttl': 15000,
                // 'x-expires': 100000
            }
          });
          channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
  
          console.log(" [x] Sent %s", JSON.stringify(data));
      });
      setTimeout(function() {
          connection.close();
          process.exit(0);
      }, 50000);
  });