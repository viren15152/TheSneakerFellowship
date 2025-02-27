const express = require("express");
const { getMostPopularSneakers, getSneakersByQuery } = require("../controllers/sneakerController");

const router = express.Router();

// Fetch most popular sneakers
router.get("/popular", getMostPopularSneakers);

// Search sneakers by query
router.get("/search/:query", getSneakersByQuery);

module.exports = router;

