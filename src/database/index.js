const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(``);
    console.log(
      `Connected to MongoDB || DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("DEBUG: MONGODB connection error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
