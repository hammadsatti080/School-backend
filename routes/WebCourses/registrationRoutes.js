const express = require("express");
const router = express.Router();

const registrationController = require("../../controllers/WebCourses/registrationController");

// POST /api/register
router.post("/", registrationController.registerStudent);

// GET /api/registrations
router.get("/", registrationController.getRegistrations);

router.put("/:id", registrationController.updateRegistration);


module.exports = router;