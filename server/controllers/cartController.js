const cartModel = require("../models/cartModel");

const cartController = {
  getAllCarts: async (req, res) => {
    const { cartId } = req.params;
    const allCarts = await cartModel.readAllCarts();
    const foundCart = allCarts.find((cart) => cart.cartId === cartId);
    if (!foundCart) {
      res.status(404).json({ error: "Cart not found" });
    } else {
      res.status(200).json(foundCart);
    }
  },

  getSingleCart: async (req, res) => {
    const { cartId } = req.params;
    const foundCart = await cartModel.readCart(cartId);
    if (!foundCart) {
      res.status(404).json({ error: "Cart not found" });
    } else {
      res.status(200).json(foundCart);
    }
  },

  addNewCart: async (req, res) => {
    const { cartId } = req.params;
    const foundCart = await cartModel.readCart(cartId);
    if (foundCart) {
      res.status(403).json({ error: "cart already exists" });
    } else {
      const newCart = await cartModel.addCart(cartId);
      res.status(201).json(newCart);
    }
  },

  updateCartItems: async (req, res) => {
    const { cartId } = req.params;
    const { cartItems } = req.body;
    const result = await cartModel.updateCart(cartId, cartItems);
    if (!result.modifiedCount) {
      res.status(404).json({ error: "Cart not found" });
    } else {
      res.status(200).json({ message: "cart updated", items: cartItems });
    }
  },
};

module.exports = cartController;
