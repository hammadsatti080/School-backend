
// routes/resultRoutes.js
const express = require("express");
const router = express.Router();
const Result = require("../models/resultModel");

// GET all results
router.get("/", async (req, res) => {
  const results = await Result.find();
  res.json(results);
});

// POST new result
router.post("/", async (req, res) => {
  const newResult = new Result(req.body);
  await newResult.save();
  res.json(newResult);
});

// PUT update result
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updated = await Result.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
});

// DELETE result
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Result.findByIdAndDelete(id);
  res.json({ message: "Deleted" });
});

module.exports = router;