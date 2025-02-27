const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();

exports.getSneakers = (req, res) => {
    const { query } = req.params;
    sneaks.getProducts(query, 10, (err, products) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(products);
    });
};
