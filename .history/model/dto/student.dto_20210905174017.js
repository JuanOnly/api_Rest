// packages
const mongoose = require("mongoose");

// funciones Edite crean eliminan obtienen

// using schema
const schema = require("../schemas/student.schema");

schema.statics = {
  create: function (data, cb) {
    let doc = new this(data);
    doc.save(cb);
  },

  getAll: function (query, cb) {
    doc.find(query, cb);
  },

  getByCode: function (query, cb) {
    doc.find(query, cb);
  },

  update: function (query, data, cb) {
    this.findOneAndUpdate(query, { $set: data }, { new: true }, cb);
  },

  delete: function (query, cb) {
    this.findOneAndDelete(query);
  },
};