const { MongoClient } = require('mongodb');
const connectToDatabase = require("../connect-to-database");

/**
 * Connects to database to read all products.
 * @returns {array} of all products
 */
const readAllProducts = async () => {
    try {
        const db = await connectToDatabase();
        return await db.collection("products").find({}).toArray();
    } catch (error ){
        console.log("error in reading products");
        console.log(error);
        return false;
    }
};

/**
 * Connects to database to read all products of the specified category.
 * @param {string} category name of product category
 * @returns {array} of all products by category
 */
const readProductsByCategory = async category => {
    try {
        const db = await connectToDatabase();
        const results = await db.collection("products").find({ category: category }).toArray();
        return results;
    } catch {
        console.log("error in reading products");
        return false;
    }
};

module.exports = {
    readAllProducts,
    readProductsByCategory
};