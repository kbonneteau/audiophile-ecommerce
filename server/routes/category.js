const router = require("express").Router();
const productController = require('../controllers/productController');

router.route("/:categoryName")
    .get(productController.getProductByCategory);

module.exports = router;