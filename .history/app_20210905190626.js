// packages
const express = require("express");
const config = require("config");

// app configuration
const app = express();
const port = config.get("server-port");

//method
app.get("/", (req, res, next) => {
  res.send("version using nodemon!");
});

const controller = require("./controller/logic/student.controller")

app.get("/student/", req, res, next) => {

}

app.listen(port, () => {
  console.log("server is running...");
});
