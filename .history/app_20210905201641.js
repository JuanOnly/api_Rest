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

const studentRoutes = require("./routes/student.routes");
studentRoutes(app);

const controller = require("./controller/logic/student.controller");

app.post("/student/", (req, res, next) => {
  controller.createStudent(req, res, next);
});

app.listen(port, () => {
  console.log("server is running...");
});
