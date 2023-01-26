const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); //

mongoose.connect("mongodb://localhost:27017/udemyDB");

const videoSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  creator: String,
  oldPrice: Number,
  newPrice: Number,
  comment: Number,
  thumbnail: String,
});

const Video = mongoose.model("Video", videoSchema);

app.get("/videos", function (req, res) {
  Video.find(function (err, videoList) {
    if (!err) {
      res.send(videoList);
      console.log(videoList);
    } else {
      console.log(err);
    }
  });
});

const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => console.log(`${PORT} ayağa kaldirildi`));