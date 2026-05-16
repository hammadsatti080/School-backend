// models/Student.js
/*
const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  studentClass: { type: String, required: true },
  fatherName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  cnic: { type: String, required: true },

 

});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
*/
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  studentClass: { type: Number, required: true }, // changed to Number
  fatherName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  cnic: { type: String, required: true, unique: true },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
