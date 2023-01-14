const mongoose = require("mongoose");

const CringeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  cringe: {
    type: String,
  },
});
module.exports = mongoose.model("cringe", CringeSchema);
