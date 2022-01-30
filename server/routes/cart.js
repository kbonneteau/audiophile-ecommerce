const router = require("express").Router();
const cartModel = require('../models/cartModel');

router.route('/:cartId')
    // .get(productController.getAllProducts);
    .get((req, res) => {
        const { cartId } = req.params;
        const foundCart = cartModel.readCarts().find(cart => cart.cartId === cartId);
        if (!foundCart) res.status(404).json({ error: "Cart not found" })
        res.status(200).json(foundCart)
    })
    .post((req, res) => {
        const { cartId } = req.params;
        
        const foundCart = cartModel.readCarts().find(cart => cart.cartId === cartId);
        if (foundCart) res.status(403).json({ error: "cart already exists" })

        const allCarts = cartModel.readCarts()
        const newCart = {
            cartId: cartId,
            user: "guest",
            taxRate: .07,
            shippingMethod: "standard",
            cartItems: []
        }
        cartModel.writeCarts([...allCarts, newCart])
        res.status(200).json(newCart);
    })

module.exports = router;