const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Register User
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        const user = await User.create({ name, email, password });
        const token = user.getSignedJwtToken();

        res.status(201).json({ success: true, token, user: { id: user._id, name, email } });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = user.getSignedJwtToken();
        res.json({ success: true, token, user: { id: user._id, name: user.name, email } });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Logout User (Client-Side Clears Token)
exports.logoutUser = (req, res) => {
    res.json({ success: true, message: "Logged out" });
};
