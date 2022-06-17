const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: connor.skudlarek@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("Hello there! I'm Connor Skudlarek and I'm a future web developer!");
});

app.get("/hobbies", function (req, res) {
  res.send("<h1>These are my hobbies:</h1><ul><li>Math</li><li>Anime</li><li>Cooking</li></ul>");
});

app.listen(3000, function () {
  console.log("Listening on port 3000.");
});
