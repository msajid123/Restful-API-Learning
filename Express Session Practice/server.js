var express = require("express");
// var cookieParser = require('cookie-parser');
var session = require("express-session");

var app = express();

const PORT = process.env.PORT || 5000;

// app.use(cookieParser());
app.use(
  session({ secret: "its a secret!", resave: true, saveUninitialized: true })
);

app.get("/", function (req, res) {
  req.session.name = "SAJID";
  return res.send("Session Set!");
});

app.get("/session", function (req, res) {
  var name = req.session.name;
  return res.send(name);
});

app.get("/destroy", function (req, res) {
  req.session.destroy(function (err) {
    console.log("Session Destroyed");
  });
  res.end();
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});