const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "transaction",
    },
  ],

  email: {
    type: String,
    unique: true,
    required: true,
  },

  googleId: {
    type: String,
    required: false,
  },

  avatar: {
    type: String,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  google_access_token: {
    type: String,
  },
});
module.exports = mongoose.model("user", UserSchema);
