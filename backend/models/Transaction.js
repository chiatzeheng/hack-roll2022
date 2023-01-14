const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  platform: {
    type: String,
  },
  amount: {
    type: Number,
  },
  remarks: {
    type: String,
  },
  expense: {
    type: Boolean,
  },
  other: {
    type: String,
  },
  location: {
    type: "string",
  },
  time: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("transaction", TransactionSchema);
