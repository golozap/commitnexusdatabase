// Load environment variables from the .env file// Load environment variables from the .env file
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); // ✅ Required for serving uploads
const archiver = require('archiver');
const fs = require("fs"); // ✅ Required for file system operations



// Initialize Express
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON with increased limit
app.use(express.json({ limit: "10mb" })); // Adjust the limit as needed

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || "mongodb://commitnexusdatabase.onrender.com/commitnexus"; // Ensure correct DB name and port
mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ Connected successfully to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

// Import Routes
const folderRoutes = require("./routes/folderRoutes");
app.use("/api", folderRoutes);


app.post("/api/all/folders/downloadSelected", async (req, res) => {
  console.log("⬇️ Downloading selected files...");
  const { code, filepaths } = req.body;
  const basePath = path.join(__dirname, "uploads", code);

  if (!fs.existsSync(basePath)) {
    return res.status(404).json({ message: "Folder not found" });
  }

  res.setHeader("Content-Disposition", `attachment; filename=${code}.zip`);
  res.setHeader("Content-Type", "application/zip");

  const archive = archiver("zip", { zlib: { level: 9 } });
  archive.pipe(res);

  for (const fp of filepaths) {
    const fullPath = path.join(basePath, fp);
    try {
      if (fs.existsSync(fullPath)) {
        const stats = fs.statSync(fullPath);
        if (stats.isFile()) {
          archive.file(fullPath, { name: fp }); // keep relative path
        } else if (stats.isDirectory()) {
          archive.directory(fullPath, fp); // include whole directory
        }
      } else {
        console.warn("⚠️ File does not exist:", fullPath);
      }
    } catch (err) {
      console.error("❌ Error accessing file:", fullPath, err);
    }
  }

  await archive.finalize();
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Default Route
app.get("/", (req, res) => {
  res.status(200).send("love you Nashmitha ");
});

// Error handling middleware (for unhandled routes or errors)
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong!",
    error: process.env.NODE_ENV === "production" ? {} : err.stack, // Hide stack trace in production
  });
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
