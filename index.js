const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const dbconnection = require("./src/config/db");
const router = require("./src/routes/router");
const PORT = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");

app.use(cookieParser());

dbconnection();

app.use("/api", router);

app.use((err, req, res, next) => {
  const statusCode = 500;
  const message = err.message || "there is some error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.get("/", (req, res) => {
  console.log("hello world");
});

app.listen(PORT, () => {
  console.log("app is listening on port no. ", PORT);
});
