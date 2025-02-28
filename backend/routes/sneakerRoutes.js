const express = require("express");
const { getSneakersByQuery, getMostPopularSneakers } = require("../controllers/sneakerController");

const router = express.Router();

router.get("/popular", getMostPopularSneakers); // ✅ Popular Sneakers Route
router.get("/search/:query", getSneakersByQuery); // ✅ Search Route (Fixes 404)

module.exports = router;



