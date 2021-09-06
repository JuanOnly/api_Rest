// packages
const mongoose = require("mongoose");

// Schema Creation
const groupSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "coll_course",
    required: true,
  },

  period_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "coll_period",
    required: true,
  },

  teacher_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "coll_teacher",
    required: true,
  },

  number: {
    type: "Number",
    required: true,
    min: 1,
    max: 2,
  },
});

// schema exportation
module.exports = groupSchema;
