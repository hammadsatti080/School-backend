const express = require("express");
const router = express.Router();
const EnrollStudent = require("../models/enroll");

// GET students by class

router.get("/", async (req, res) => {
  try {
    const { class: classNumber } = req.query; // get class from query
    let students;
    if (classNumber) {
      students = await EnrollStudent.find({ studentClass: Number(classNumber) });
    } else {
      students = await EnrollStudent.find();
    }
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// get new student
router.get("/", async (req, res) => {
  const { class: studentClass } = req.query;
  try {
    const filter = studentClass ? { studentClass } : {};
    const enrollments = await EnrollStudent.find(filter).sort({ createdAt: -1 });
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// POST new student
router.post("/", async (req, res) => {
  try {
    const enrollment = new EnrollStudent(req.body);
    await enrollment.save();
    res.json({ message: "Enrollment added successfully!", enrollment });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


// UPDATE enrollment
router.put("/:id", async (req, res) => {
  try {
    const updated = await EnrollStudent.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({ message: "Enrollment updated successfully!", updated });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// DELETE enrollment
router.delete("/:id", async (req, res) => {
  try {
    await EnrollStudent.findByIdAndDelete(req.params.id);
    res.json({ message: "Enrollment deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
})


const Enroll = require("../models/enroll");

// GET all enrollments
router.get("/", async (req, res) => {
  try {
    const enrollments = await Enroll.find();
    res.json(enrollments);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE enrollment
router.put("/:id", async (req, res) => {
  try {
    const updated = await Enroll.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE enrollment
router.delete("/:id", async (req, res) => {
  try {
    await Enroll.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;


