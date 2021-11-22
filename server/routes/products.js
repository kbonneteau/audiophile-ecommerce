const router = require("express").Router();
const productController = require('../controllers/productController');

router.route('/')
    .get(productController.getAllProducts);

router.route('/:productId')
    .get(productController.getSingleProduct);

router.route("/category/:categoryName")
    .get(productController.getProductByCategory);

module.exports = router;