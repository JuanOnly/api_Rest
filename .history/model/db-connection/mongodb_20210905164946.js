// packages
const mongoose = require("mongoose");
const config = require("config");
const mongodbinfo = config.get("db-connnections.mongodb");

const connStr = `mongodb+srv://rest_api_user:<password>@cluster0.mdl3p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// user: rest_api_user
// password: fu4uPhWPbbzFGm38
