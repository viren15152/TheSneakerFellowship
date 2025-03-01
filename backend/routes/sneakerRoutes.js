const express = require("express");
const { getSneakersByQuery, getMostPopularSneakers } = require("../controllers/sneakerController");

const router = express.Router();

router.get("/popular", getMostPopularSneakers); 
router.get("/search/:query", getSneakersByQuery); 

module.exports = router;



