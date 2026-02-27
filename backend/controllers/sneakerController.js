const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();

exports.getMostPopularSneakers = async (req, res) => {
  try {
    sneaks.getMostPopular(10, (err, products) => {

      if (err || !Array.isArray(products)) {
        console.error("Sneaks API Error:", err);
        return res.status(200).json([]); // ← NEVER return 500
      }

      const filteredSneakers = products.filter(sneaker =>
        sneaker?.brand?.toLowerCase().includes("jordan") ||
        sneaker?.brand?.toLowerCase().includes("yeezy")
      );

      return res.json(filteredSneakers);

    });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(200).json([]); // ← also never 500
  }
};

exports.getSneakersByQuery = async (req, res) => {
  try {
    const query = req.params.query;

    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }

    sneaks.getProducts(query, 10, (err, products) => {

      if (err || !Array.isArray(products)) {
        console.error("Sneaks API Error:", err);
        return res.status(200).json([]); // ← key fix
      }

      return res.json(products.length ? products : []);

    });

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(200).json([]); // ← prevent crash
  }
};



  
