const { MongoClient } = require('mongodb');
const connectToDatabase = require("../connect-to-database");

/**
 * Connects to database to read all products.
 * @returns {array} of all products
 */
const readAllProducts = async () => {
    const db = await connectToDatabase();
    const results = await db.collection("products").find({}).toArray();
    return results;
};

module.exports = {
    readAllProducts
};