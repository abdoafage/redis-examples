const redis = require("redis");
const client = redis.createClient();

client.connect();

const channel = "article";

client.subscribe(channel, (msg, channelName) => {
  console.log(msg);
  console.log(`Subscribed to ${channelName} channels, including "${msg}"`);
});

// client.on("message",  (channel, message) => {
//   console.log(`Received message "${message}" from channel "${channel}"`);
// });
