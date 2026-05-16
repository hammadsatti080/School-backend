// routes/studentRoutes.js
/*
const express = require("express");
const router = express.Router();
const Student = require("../models/Student");



router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json({ message: "Student added successfully", student });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Student updated successfully", student });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});



module.exports = router;
*/

const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// GET all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// POST new student
router.post("/", async (req, res) => {
  try {
    const studentData = {
      ...req.body,
      studentClass: Number(req.body.studentClass), // ensure number
    };
    const student = new Student(studentData);
    await student.save();
    res.json({ message: "Student added successfully", student });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// PUT update student
router.put("/:id", async (req, res) => {
  try {
    const updatedData = {
      ...req.body,
      studentClass: Number(req.body.studentClass), // ensure number
    };
    const student = await Student.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.json({ message: "Student updated successfully", student });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// DELETE student
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;
