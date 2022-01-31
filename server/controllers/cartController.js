const cartModel = require("../models/cartModel");

const cartController = {
  getCart: async (req, res) => {
    const { cartId } = req.params;
    const allCarts = await cartModel.readCarts();
    const foundCart = allCarts.find((cart) => cart.cartId === cartId);
    if (!foundCart) {
      res.status(404).json({ error: "Cart not found" });
    } else {
      res.status(200).json(foundCart);
    }
  },

  addNewCart: async (req, res) => {
    const { cartId } = req.params;
    const allCarts = await cartModel.readCarts();
    const foundCart = allCarts.find((cart) => cart.cartId === cartId);

    if (foundCart) {
      res.status(403).json({ error: "cart already exists" });
    } else {
      const newCart = await cartModel.addCart(cartId);
      res.status(200).json(newCart);
    }
  },
};

module.exports = cartController;
