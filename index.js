const express = require("express");
const axios = require("axios");
const redis = require("redis");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const redisClient = redis.createClient();
redisClient.connect();

app.get("/photos", async (req, res) => {
  const photos = await redisClient.get("photos");
  if (photos != null) {
    console.log("with cache");
    return res.json(JSON.parse(photos));
  } else {
    console.log("without cache");
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    redisClient.set("photos", JSON.stringify(data));
    res.json(data);
  }
});

app.get("/photos/:id", async (req, res) => {
  const id = req.params.id;
  const photo = await redisClient.get(`/photos/${id}`);
  console.log(photo);
  if (photo) {
    res.json(JSON.parse(photo));
    console.log("with cache");
  } else {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    redisClient.set(`/photos/${id}`, JSON.stringify(data));
    console.log("without chache");
    res.json(data);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/photos is running`);
});
