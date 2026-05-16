/* 
const express = require("express");
const router = express.Router();
const Teacher = require("../models/Teacher");
const Course = require("../models/Courses/Course");

// Get all teachers for dropdown
router.get("/teachers", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch teachers" });
  }
});

// Get all courses with teacher info
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().populate("teacher");
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

// Add a new course
router.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    console.error("Error adding course:", err);
    res.status(400).json({ error: err.message });
  }
});

// Delete a course
router.delete("/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete course" });
  }
});
// Update a course (Edit)
router.put("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("teacher");

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.json(course);
  } catch (err) {
    console.error("Error updating course:", err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

*/

const express = require("express");
const router = express.Router();
const Course = require("../models/Courses/Course");
const Teacher = require("../models/Teacher");


// GET teachers
router.get("/teachers", async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
});


// GET courses
router.get("/", async (req, res) => {
  const courses = await Course.find().populate("teacher");
  res.json(courses);
});


// ADD course
router.post("/", async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json(course);
});


// UPDATE course
router.put("/:id", async (req, res) => {
  const course = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(course);
});


// DELETE course
router.delete("/:id", async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;