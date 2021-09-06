// packages
const mongoose = require("mongoose");
const config = require("config");

const mongodbinfo = config.get("db-connnections.mongodb");

const connStr = `mongodb+srv://${mongodbinfo.user}:${mongodbinfo.password}@${mongodbinfo.host}/${mongodbinfo.dbname}?retryWrites=true&w=majority`;

// user: rest_api_user
// password: fu4uPhWPbbzFGm38

module.exports = () => {
  mongoose.connect(connStr);

  mongoose.connection.on("connected", () => {
    console.log("mongodb server connected!");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("mongodb server disconnected!");
  });

  mongoose.connection.on("error", () => {
    console.log("mongodb server connection error!");
  });

  mongoose.connection.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log("mongodb server shutting down!");
    });
  });
};
