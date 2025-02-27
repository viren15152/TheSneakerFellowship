const express = require("express");
const { saveSearch, getSavedSearches } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/save", protect, saveSearch);
router.get("/saved", protect, getSavedSearches);

module.exports = router;
