const { default: mongoose } = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
const databaseConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI).then(() => {
      console.log("Database connected successfully");
    });
  } catch (error) {
    console.log("Database connection error:", error);
  }
};

module.exports = databaseConnection;
