// packages
const mongoose = require("mongoose");

// Schema Creation
const teacherSchema = new mongoose.Schema({
  documento: {
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

  office: {
    type: "String",
    required: true,
  },

  department: {
    type: "String",
    required: true,
  },
});

// schema exportation
module.exports = teacherSchema;
