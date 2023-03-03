const redis = require("redis");
const publisher = redis.createClient();

const pub = async () => {
  await publisher.publish("article", JSON.stringify(article));
};

const article = {
  id: "123456",
  name: "Using Redis Pub/Sub with Node.js",
  blog: "Logrocket Blog",
};

publisher.connect();

for (let i = 0; i < 5; i++) {
  publisher.publish("article", `welcome ${i + 1}`);
}
