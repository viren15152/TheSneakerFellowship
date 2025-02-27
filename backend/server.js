require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const sneakerRoutes = require("./routes/sneakerRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/sneakers", sneakerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Connect to MongoDB
connectDB();

// Start the Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
