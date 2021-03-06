const express = require("express");
const bodyParser = require("body-parser");
const customDate = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function (req, res) {
  let day = customDate.weekdayOnly();
  res.render("list", { listTitle: day, newListItems: items });
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.post("/work", function (res, req) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function () {
  console.log("Server listening on port 3000.");
});
