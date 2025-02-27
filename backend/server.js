require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SneaksAPI = require('sneaks-api');

const app = express();
const sneaks = new SneaksAPI();

// Middleware
app.use(cors());
app.use(express.json());

// Test route for sneakers API
app.get('/sneakers/:query', (req, res) => {
    const { query } = req.params;
    sneaks.getProducts(query, 10, (err, products) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(products);
    });
});

// Connect to MongoDB (update .env file with correct URI)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log('❌ MongoDB Connection Error:', err));


// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
