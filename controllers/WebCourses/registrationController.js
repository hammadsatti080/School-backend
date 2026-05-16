const Registration = require("../../models/WebCourses/registrationModel");

// POST
const registerStudent = async (req, res) => {
  try {
    const { studentName, fatherName, contact, courses, total } = req.body;

    if (!studentName || !fatherName || !contact || !courses || courses.length === 0) {
      return res.status(400).json({ message: "Invalid data" });
    }

    const registration = new Registration({
      studentName,
      fatherName,
      contact,
      courses,
      total,
    });

    await registration.save(); // ✅ SAVE TO DATABASE

    res.json({ message: "Registration saved", registration });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET
const getRegistrations = async (req, res) => {
  const data = await Registration.find().sort({ dateTime: -1 });
  res.json(data);
};

// PUT /api/register/:id
const updateRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const { studentName, fatherName, contact, courses, total } = req.body;

    const updated = await Registration.findByIdAndUpdate(
      id,
      { studentName, fatherName, contact, courses, total },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Student not found" });

    res.json({ message: "Updated successfully", registration: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerStudent, getRegistrations, updateRegistration };
