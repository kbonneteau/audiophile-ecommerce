const { MongoClient } = require('mongodb');
const connectToDatabase = require("../connect-to-database");

/**
 * Connects to database to read all products.
 * @returns {array} of all products
 */
const readAllProducts = async () => {
    const db = await connectToDatabase();
    return await db.collection("products").find({}).toArray();
};

/**
 * Connects to database to read all products of the specified category.
 * @param {string} category name of product category
 * @returns {array} of all products by category
 */
const readProductsByCategory = async category => {
    const db = await connectToDatabase();
    const results = await db.collection("products").find({ category: category }).toArray();
    return results;
};

module.exports = {
    readAllProducts,
    readProductsByCategory
};