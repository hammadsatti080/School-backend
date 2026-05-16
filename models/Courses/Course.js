/* 
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  description: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true },
  startDate: Date,
  status: { type: String, default: "Active" },
    
});

module.exports = mongoose.model("Course", courseSchema);

*/
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: String,
  code: String,
  description: String,
  className: String,
  status: String,
  startDate: Date,
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
  },
});

module.exports = mongoose.model("Course", courseSchema);
