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
    // NOTE: these variables may change in the future
    const { item, quantity } = req.body;

    const foundCart = await cartModel.readCart(cartId);

    // TODO: MAP through existing cartItems to find the same item
    // - if it exists, sum the quantities
    // - else, simply return the new item
    // Consider if this should be handled on front-end
    const allCartItems = [...foundCart[0].cartItems, { item, quantity }];
    // console.log("all cart items", allCartItems);
    const result = await cartModel.updateCart(cartId, allCartItems);
    if (!result.modifiedCount) {
      res.status(404).json({ error: "Cart not found" });
    } else {
      res.status(200).json({ message: "cart updated", items: allCartItems });
    }
  },

  deleteCartItems: async (req, res) => {
    const { cartId } = req.params;
    const result = await cartModel.updateCart(cartId, []); // reset cart to empty array
    if (!result.modifiedCount) {
      res.status(404).json({ error: "Cart not found" });
    } else {
      res.status(200).json({ message: "Cart items removed", items: [] });
    }
  },
};

module.exports = cartController;
