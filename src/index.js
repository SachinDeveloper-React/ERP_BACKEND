const app = require("./app");
const connectDB = require("./database");

require("dotenv").config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", () => {
      console.log("DEBUG : ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, "0:0:0:0", () => {
      console.log(`Server is running at port : ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("DEBUG : Error connecting to DB", error);
  });
