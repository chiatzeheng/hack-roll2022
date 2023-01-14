const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://elliott:pornhub.com@cluster0.x8jydt3.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log("elle error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
