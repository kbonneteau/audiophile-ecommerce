const router = require("express").Router();
const productController = require('../controllers/productController');

router.route('/')
    .get(productController.getAllProducts);

router.route('/:productSlug')
    .get(productController.getSingleProduct);

module.exports = router;