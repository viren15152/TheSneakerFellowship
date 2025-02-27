const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();

// Get most popular sneakers
exports.getMostPopularSneakers = async (req, res) => {
  try {
    sneaks.getMostPopular(10, (err, products) => {
      if (err) {
        console.error("Sneaks API Error:", err);
        return res.status(500).json({ error: "Failed to fetch sneakers" });
      }

      if (!Array.isArray(products)) {
        console.error("Unexpected API Response:", products);
        return res.json([]); // Ensure it's always an array
      }

      res.json(products);
    });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get sneakers by search query
exports.getSneakersByQuery = async (req, res) => {
  try {
    const { query } = req.params;
    sneaks.getProducts(query, 10, (err, products) => {
      if (err) {
        console.error("Sneaks API Error:", err);
        return res.status(500).json({ error: "Failed to fetch sneakers" });
      }

      if (!Array.isArray(products)) {
        console.error("Unexpected API Response:", products);
        return res.json([]); // Ensure it's always an array
      }

      res.json(products);
    });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


  
