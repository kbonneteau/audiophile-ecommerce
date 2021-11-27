const productModel = require('../models/productModel');

let productController = {
    /*
        Returns all products.
    */
    getAllProducts: async (req, res) => {
        const products = await productModel.readAllProducts();
        products.length > 0
            ? res.status(200).json(products)
            : res.status(404).send('No products found');
    },
    /*
        Returns a single product based on product ID
    */
    getSingleProduct: async (req, res) => {
        const products = await productModel.readAllProducts();
        const foundProduct = products.find(product => product.id === Number(req.params.productId));
        foundProduct
            ? res.status(200).json(foundProduct)
            : res.status(404).json({ error: "Product not found"});
    },
    /*
        Returns all products related to a product category
    */
    getProductByCategory: async (req, res) => {
        const products = await productModel.readProductsByCategory(req.params.categoryName)
        const updatedProducts = products.map(product => {
            return {
                name: product.name,
                description: product.description,
                image: product.image,
                slug: product.slug,
                new: product.new,
                id: product.id,
                price: product.price
            }
        });
        updatedProducts.length > 0
            ? res.status(200).json(updatedProducts)
            : res.status(404).json({ error: `No products found in ${req.params.categoryName} category`});
    }
};

module.exports = productController;