const { getPrismaClient } = require("../db/prisma-client");

const catchError = (error) => {
  console.log("Error in fetching carts");
  console.log(error);
};

const readAllCarts = async () => {
  try {
    const prisma = getPrismaClient();
    return await prisma.cart.findMany();
  } catch (error) {
    catchError(error);
    return false;
  }
};

const readCart = async (cartId) => {
  try {
    const prisma = getPrismaClient();
    return await prisma.cart.findUnique({
      where: { cartId: cartId }
    });
  } catch (error) {
    catchError(error);
    return false;
  }
};

const addCart = async (cartId) => {
  try {
    const prisma = getPrismaClient();
    const cart = await prisma.cart.create({
      data: {
        cartId: cartId,
        user: "guest",
        taxRate: 0.2,
        shippingMethod: "standard",
        cartItems: [],
      }
    });
    return cart;
  } catch (error) {
    catchError(error);
    return false;
  }
};

const updateCart = async (cartId, items) => {
  try {
    const prisma = getPrismaClient();
    const result = await prisma.cart.update({
      where: { cartId: cartId },
      data: { cartItems: items }
    });
    return result;
  } catch (error) {
    catchError(error);
    return false;
  }
};

module.exports = {
  readAllCarts,
  readCart,
  addCart,
  updateCart,
};
