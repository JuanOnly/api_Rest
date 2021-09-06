// packages
const express = require("express");
const config = require("config");

// app configuration
const app = express();
const port = config.get("server-port");

//method
app.get("/", (req, res, next) => {
  res.send("welcome to acadamic rest api");
});

app.listen(port, () => {
  console.log("server is running...");
});
