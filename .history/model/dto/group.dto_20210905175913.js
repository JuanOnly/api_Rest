// packages
const mongoose = require("mongoose");

// funciones Edite crean eliminan obtienen

// using schema
const schema = require("../schemas/group.schema");

schema.statics = {
  create: function (data, cb) {
    let doc = new this(data);
    doc.save(cb);
  },

  getAll: function (query, cb) {
    this.find(query, cb);
  },

  getByCode: function (query, cb) {
    this.find(query, cb);
  },

  update: function (query, data, cb) {
    this.findOneAndUpdate(query, { $set: data }, { new: true }, cb);
  },

  delete: function (query, cb) {
    this.findOneAndDelete(query);
  },
};

const dto = mongoose.model("call_period", schema);
module.exports = dto;
