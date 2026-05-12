const mockSneakers = require("../data/mockSneakers.json");

exports.getMostPopularSneakers = async (req, res) => {
  try {
    return res.status(200).json(mockSneakers.slice(0, 12));
  } catch (error) {
    console.error("Error loading popular sneakers:", error);
    return res.status(200).json([]);
  }
};

exports.getSneakersByQuery = async (req, res) => {
  try {
    const query = req.params.query?.toLowerCase();

    if (!query) {
      return res.status(200).json([]);
    }

    const filteredSneakers = mockSneakers.filter((sneaker) =>
      sneaker.shoeName.toLowerCase().includes(query) ||
      sneaker.brand.toLowerCase().includes(query) ||
      sneaker.colorway.toLowerCase().includes(query)
    );

    return res.status(200).json(filteredSneakers);

  } catch (error) {
    console.error("Search Error:", error);
    return res.status(200).json([]);
  }
};
