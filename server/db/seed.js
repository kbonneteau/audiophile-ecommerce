require("dotenv").config();
const { MongoClient } = require("mongodb");
const { uri } = require("./connect-to-database");

const seed = async () => {
  console.log("seeding...");

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  });

  try {
    await client.connect();
    const collection = client.db(process.env.DB_NAME).collection("carts");

    collection.drop(); // The drop() command destroys all data from a collection.

    const testCarts = [
      {
        cartId: "44a4ad0c-8422-42af-89be-df2e7ae521d7",
        user: "guest",
        taxRate: 0.2,
        shippingMethod: "standard",
        cartItems: [],
      },
    ];

    const options = { ordered: true };
    const result = await collection.insertMany(testCarts, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (error) {
    console.log("error in seeding cart data");
    console.log(error);
    return false;
  } finally {
    console.log("seeding complete... closing db connection..."); // find a way to close db connection
    await client.close();
    console.log("db connection closed");
  }
};

if (module === require.main) {
  seed();
}
