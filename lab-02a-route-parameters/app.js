const express = require("express");
const app = express();

app.get("/header/:title", function (req, res) {
  let titleInput = req.params.title;
  let htmlElement = "<h1>" + titleInput + "</h1>";
  res.send(htmlElement);
});

app.get("/add/:num1/:num2", function (req, res) {
  let a = Number(req.params.num1);
  let b = Number(req.params.num2);
  let sum = a + b;
  res.send(sum);
});

app.get("/shorten/:text", function (req, res) {
  let textInput = req.params.text;
  if (textInput.length > 10) {
    let upperBound = textInput.length - 3;
    let newString = textInput.substring(0, upperBound);
    newString = newString + "...";
  }

  res.send(newString);
});

app.listen(3000);

module.exports = app;
