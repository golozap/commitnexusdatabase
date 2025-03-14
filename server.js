// Load environment variables from the .env file
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Initialize Express
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON with increased limit
app.use(express.json({ limit: "10mb" })); // Adjust the limit as needed

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || "mongodb://commitdatabase-eight.vercel.app";
mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ Connected successfully to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Import Routes
const folderRoutes = require("./routes/folderRoutes");
app.use("/api", folderRoutes);

// Default Route
app.get("/", (req, res) => {
  res.status(200).send("love you Nashmitha 💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕");
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at database-on2sfamm1-commitnexus-projects.vercel.app`);
});
