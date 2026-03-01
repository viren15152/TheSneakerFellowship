const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();

exports.getMostPopularSneakers = async (req, res) => {
  try {
    let responded = false;

    const timeout = setTimeout(() => {
      if (!responded) {
        responded = true;
        return res.status(200).json([]);
      }
    }, 5000);

    sneaks.getMostPopular(10, (err, products) => {
      if (responded) return;

      clearTimeout(timeout);
      responded = true;

      if (err || !Array.isArray(products)) {
        console.error("Sneaks API Error:", err);
        return res.status(200).json([]);
      }

      const filteredSneakers = products.filter(
        (sneaker) =>
          sneaker?.brand?.toLowerCase().includes("jordan") ||
          sneaker?.brand?.toLowerCase().includes("yeezy")
      );

      return res.status(200).json(filteredSneakers);
    });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(200).json([]);
  }
};

exports.getSneakersByQuery = async (req, res) => {
  try {
    const query = req.params.query;

    if (!query) {

      return res.status(200).json([]);
    }

    let responded = false;

    const timeout = setTimeout(() => {
      if (!responded) {
        responded = true;
        return res.status(200).json([]);
      }
    }, 5000);

    sneaks.getProducts(query, 10, (err, products) => {
      if (responded) return;

      clearTimeout(timeout);
      responded = true;

      if (err || !Array.isArray(products)) {
        console.error("Sneaks API Error:", err);
        return res.status(200).json([]);
      }

      return res.status(200).json(products.length ? products : []);
    });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(200).json([]);
  }
};



  
