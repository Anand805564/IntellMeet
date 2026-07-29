const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
console.log("1. dotenv loaded");

const connectDB = require("./config/db");
console.log("2. db imported");

const meetingRoutes = require("./routes/meetingRoutes");
console.log("3. routes imported");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

console.log("4. middleware added");

app.use("/api/meetings", meetingRoutes);
console.log("5. routes mounted");

app.get("/", (req, res) => {
  res.send("🚀 IntellMeet Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});