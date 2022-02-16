const express = require("express");
let app = express();

const hbs = require("hbs");
const { dropRight, sum } = require("lodash");
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("index.hbs");
});

app.get("/about-us", function (req, res) {
  res.render("about-us.hbs");
});

app.get("/multiply/:left/:right", function (req, res) {
  let left = Number(req.params.left);
  let right = Number(req.params.right);
  let product = left * right;
  let htmlElement = "<h3>" + left + "x" + right + "=" + product + "</h3>";
  res.send(htmlElement);
});

app.listen(3000);

// this is so that we can test
module.exports = app;
