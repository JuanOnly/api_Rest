// packages
const mongoose = require("mongoose");
const config = require("config");
const mongodbinfo = config.get("db-connnections.mongodb");

const connStr = `mongodb+srv://${mongodbinfo.user}:${mongodbinfo.password}@${mongodbinfo.host}/${mongodbinfo.dbname}?retryWrites=true&w=majority`;
// user: rest_api_user
// password: fu4uPhWPbbzFGm38
