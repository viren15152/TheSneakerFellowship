const User = require("../models/User");

// Save a search query to user's profile
exports.saveSearch = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        const { query } = req.body;
        if (!query) return res.status(400).json({ message: "Search query required" });

        user.savedSearches.push(query);
        await user.save();

        res.json({ success: true, savedSearches: user.savedSearches });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get user's saved searches
exports.getSavedSearches = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json({ success: true, savedSearches: user.savedSearches });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
