const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/about-me", (req, res) => {
  res.render("about");
});

app.get("/skills", (req, res) => {
  res.render("skills");
});

app.listen(3000, (req, res) => {
  console.log("Server is running on 3000");
});
