// packages
const mongoose = require("mongoose");

// Schema Creation
const vehiculo
Schema = new mongoose.Schema({
  brand: {
    type: "String",
    required: true,
  },

  color: {
    type: "String",
    required: true,
  },
});

// schema exportation
module.exports = vehiculoSchema;
