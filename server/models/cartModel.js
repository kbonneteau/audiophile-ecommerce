const { MongoClient } = require("mongodb");
const connectToDatabase = require("../connect-to-database");

const catchError = (error) => {
  console.log("Error in fetching carts");
  console.log(error);
};

const readCarts = async () => {
  try {
    const db = await connectToDatabase();
    return await db.collection("carts").find({}).toArray();
  } catch (error) {
    catchError(error);
    return false;
  }
};

const addCart = async (cartId) => {
  try {
    const db = await connectToDatabase();
    const cart = await db.collection("carts").insertOne({
      cartId: cartId,
      user: "guest",
      taxRate: 0.07,
      shippingMethod: "standard",
      cartItems: [],
    });
    return cart;
  } catch (error) {
    catchError(error);
    return false;
  }
};

module.exports = {
  readCarts,
  addCart,
};
