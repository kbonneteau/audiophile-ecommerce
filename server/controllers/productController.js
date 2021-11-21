const productModel = require('../models/productModel');

let productController = {
    /*

    */
    getAllProducts: async (req, res) => {
        const products = await productModel.readAllProducts();
        products
            ? res.status(200).json(products)
            : res.status(404).send('No products found');
    },
};

module.exports = productController;