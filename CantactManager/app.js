var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

const route = require("./routes/route");

mongoose.connect("mongodb://localhost:27017/contactlist");
mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

mongoose.connection.on("error", (err) => {
  if (err) {
    console.log("error in database" + err);
  }
});

var app = express();

const port = 3000;

//adding middleware cors
app.use(cors());

app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", route);

app.get("/", (req, res) => {
  res.send("foobar");
});

app.listen(port, () => {
  console.log("server started at" + port);
});