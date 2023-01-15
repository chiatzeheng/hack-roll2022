const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const config = require("config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.get("mongoURI"));
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log("elle error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
