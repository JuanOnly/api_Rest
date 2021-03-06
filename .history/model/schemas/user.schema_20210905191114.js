// packages
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

// Schema Creation
const userSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
    unique: true,
  },

  lastname: {
    type: "String",
    required: true,
    unique: true,
  },

  username: {
    type: "String",
    required: true,
    unique: true,
  },

  password: {
    type: "String",
    required: true,
  },

  role: {
    type: "Number",
    required: true,
  },
});

// schema exportation
userSchema.plugin(validator);
module.exports = userSchema;
