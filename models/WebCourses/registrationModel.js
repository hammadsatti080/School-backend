const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  studentName: String,
  fatherName: String,
  contact: String,
  courses: Array,
  total: Number,
  dateTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Registration", registrationSchema);