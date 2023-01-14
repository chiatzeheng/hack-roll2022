const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
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
  },

  googleId: {
    type: String,
  },

  avatar: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  google_access_token: {
    type: String,
  },
  cringe: {
    type: mongoose.Schema.Types.Array,
  },
});
module.exports = mongoose.model("user", UserSchema);
