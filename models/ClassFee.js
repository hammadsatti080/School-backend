const mongoose = require("mongoose");

const classFeeSchema = new mongoose.Schema({
  className: { type: String, required: true, unique: true },
  feeAmount: { type: Number, required: true }
});

module.exports = mongoose.model("ClassFee", classFeeSchema);