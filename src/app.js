const express = require("express");
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const app = express();

const corsOption = {
  credentials: true,
  origin: process.env.CORS_ORIGIN,
  optionSuccessStatus: 200,
};
app.use(cors(corsOption));
app.use(
  express.json({
    limit: "16kb",
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
  });
});

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookiesParser());

module.exports = app;
