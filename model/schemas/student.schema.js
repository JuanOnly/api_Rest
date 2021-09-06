// packages
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

// Schema Creation
const studentSchema = new mongoose.Schema({
  code: {
    type: "String",
    required: true,
    unique: true,
  },

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

  email: {
    type: "String",
    required: true,
    unique: true,
  },

  phone: {
    type: "String",
    required: true,
  },

  career: {
    type: "String",
    required: true,
  },
});

// schema exportation
studentSchema.plugin(validator);
module.exports = studentSchema;
