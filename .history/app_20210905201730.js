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

app.listen(port, () => {
  console.log("server is running...");
});
