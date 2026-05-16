const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  fatherName: { type: String, required: true },
  studentClass: { type: String, required: true },
  gender: { type: String, required: true },
  cnic: { type: String, required: true },
  contactNo: { type: String, required: true },
  bloodGroup: { type: String, required: true },
    religion: { type: String, required: true },
}, { timestamps: true });

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
module.exports = Enrollment;