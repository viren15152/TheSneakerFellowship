require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const SneaksAPI = require("sneaks-api");

const sneakerRoutes = require("./routes/sneakerRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const sneaks = new SneaksAPI();

connectDB();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/sneakers", sneakerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.get("/api/sneakers/search/:query", (req, res) => {
  const { query } = req.params;

  sneaks.getProducts(query, 10, (err, products) => {
    if (err) return res.status(500).json({ error: "Failed to fetch sneaker data" });
    res.json(products);
  });
});

app.get("/api/sneaks/search/:query", (req, res) => {
  const { query } = req.params;

  sneaks.getProducts(query, 10, (err, products) => {
    if (err) return res.status(500).json({ error: "Failed to fetch sneaker data" });
    res.json(products);
  });
});

app.get("/api/sneaks/prices/:styleID", (req, res) => {
  const { styleID } = req.params;

  sneaks.getProductPrices(styleID, (err, product) => {
    if (err) return res.status(500).json({ error: "Failed to fetch sneaker prices" });
    res.json(product);
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.get("/api/health", (req, res) => res.status(200).send("Server is healthy"));
app.head("/api/health", (req, res) => res.sendStatus(200));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

