// packages
const express = require("express");
const config = require("config");

// app configuration
const app = express();
const port = config.get("port");

app.listen(port, () => {
  console.log("server is running...");
});
