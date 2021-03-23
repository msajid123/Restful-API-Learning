var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();

const PORT = process.env.PORT || 5000;

app.use(cookieParser());

let users = {
  name: "SAJID",
  Age: 21,
};

app.get("/", function (req, res) {
  res.send("Cookie Set!");
});

app.get("/setuser", function (req, res) {
  res.cookie("userData", users);
  res.send("User Data added to Cookie!");
});

app.get("/getuser", function (req, res) {
  res.send(req.cookies);
});

app.get("/logout", function (req, res) {
  res.clearCookie("userData");
  res.send("User logout successful");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});