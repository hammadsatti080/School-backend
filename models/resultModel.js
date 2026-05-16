// models/Result.js
const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: String,
  obtain: Number,
  total: Number,
  code: String
});

const resultSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  studentName: { type: String, required: true },
  class: { type: String, required: true },
  subjects: [subjectSchema],
  totalMarks: Number,
  obtainMarks: Number,
  percentage: Number,
  status: String
});

module.exports = mongoose.model("Result", resultSchema);