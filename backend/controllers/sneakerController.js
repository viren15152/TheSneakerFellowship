const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();

exports.getMostPopularSneakers = async (req, res) => {
  try {
    sneaks.getMostPopular(10, (err, products) => {
      if (err) {
        console.error("Sneaks API Error:", err);
        return res.status(500).json({ error: "Failed to fetch sneakers" });
      }

      // FILTER FOR ONLY JORDAN & YEEZY SNEAKERS
      const filteredSneakers = products.filter(sneaker =>
        sneaker.brand.toLowerCase().includes("jordan") ||
        sneaker.brand.toLowerCase().includes("yeezy")
      );

      res.json(filteredSneakers);
    });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Sneakers by Search Query
exports.getSneakersByQuery = async (req, res) => {
  try {
    const query = req.params.query;

    console.log("Received Search Query:", query); // Debugging Line

    if (!query) {
      console.error("❌ No search query provided!");
      return res.status(400).json({ error: "Search query is required" });
    }

    sneaks.getProducts(query, 10, (err, products) => {
      if (err) {
        console.error("Sneaks API Error:", err);
        return res.status(500).json({ error: "Failed to fetch sneakers" });
      }

      console.log("✅ API Response:", products);
      res.json(products.length ? products : []);
    });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};



  
