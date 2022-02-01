const { MongoClient } = require("mongodb");
const connectToDatabase = require("../connect-to-database");

const catchError = (error) => {
  console.log("Error in fetching carts");
  console.log(error);
};

const readAllCarts = async () => {
  try {
    const db = await connectToDatabase();
    return await db.collection("carts").find({}).toArray();
  } catch (error) {
    catchError(error);
    return false;
  }
};

const readCart = async (cartId) => {
  try {
    const db = await connectToDatabase();
    return await db.collection("carts").find({ cartId: cartId }).toArray();
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

const updateCart = async (cartId, items) => {
  try {
    const db = await connectToDatabase();
    const result = await db.collection("carts").updateOne(
      { cartId: cartId },
      {
        $set: { cartItems: items },
        $currentDate: { lastModified: true },
      }
    );
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
