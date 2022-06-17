const express = require("express");
const res = require("express/lib/response");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var answer = num1 + num2;
  res.send(num1 + " + " + num2 + " = " + answer);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var BMI = Math.round((weight / (height * height)*100))/100;
  res.send(
    "With a weight of " +
      weight +
      "kg and height of " +
      height +
      "m, your BMI is: " +
      BMI +
      "."
  );
});

app.listen(3000, function () {
  console.log("Now listening on port 3000.");
});
