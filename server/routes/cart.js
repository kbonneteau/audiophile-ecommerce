const router = require("express").Router();
// const productController = require('../controllers/productController');

router.route('/')
    // .get(productController.getAllProducts);
    .get((req, res) => {
        res.send("Hello from the cart route!")
    })

// router.route('/:productSlug')
    // .get(productController.getSingleProduct);

module.exports = router;