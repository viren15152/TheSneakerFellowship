require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path"); // ✅ Needed to serve frontend files
const connectDB = require("./config/db");
const SneaksAPI = require("sneaks-api");

const sneakerRoutes = require("./routes/sneakerRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const sneaks = new SneaksAPI();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/sneakers", sneakerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Add a new API route to fetch sneakers from Sneaks API
app.get("/api/sneaks/search/:query", (req, res) => {
  const { query } = req.params;
  sneaks.getProducts(query, 10, (err, products) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch sneaker data" });
    }
    res.json(products);
  });
});

app.get("/api/sneaks/prices/:styleID", (req, res) => {
  const { styleID } = req.params;
  sneaks.getProductPrices(styleID, (err, product) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch sneaker prices" });
    }
    res.json(product);
  });
});

// Connect to MongoDB
connectDB();

// ✅ Serve React Frontend in Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// Start the Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
