const express = require("express");
const router = express.Router();
const ClassFee = require("../models/ClassFee");

// GET all class fees
router.get("/", async (req, res) => {
  try {
    const fees = await ClassFee.find();
    res.json(fees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST / Add or Update class fee
router.post("/", async (req, res) => {
  const { className, feeAmount } = req.body;
  try {
    let fee = await ClassFee.findOne({ className });
    if (fee) {
      fee.feeAmount = feeAmount; // update
    } else {
      fee = new ClassFee({ className, feeAmount }); // add
    }
    await fee.save();
    res.json(fee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;