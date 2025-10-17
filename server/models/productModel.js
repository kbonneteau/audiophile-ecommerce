const { getPrismaClient } = require("../db/prisma-client");

/**
 * Reads all products from the database using Prisma.
 * @returns {array} of all products
 */
const readAllProducts = async () => {
  try {
    const prisma = getPrismaClient();
    return await prisma.product.findMany();
  } catch (error) {
    console.log("error in reading products");
    console.log(error);
    return false;
  }
};

/**
 * Reads all products of the specified category using Prisma.
 * @param {string} category name of product category
 * @returns {array} of all products by category
 */
const readProductsByCategory = async (category) => {
  try {
    const prisma = getPrismaClient();
    return await prisma.product.findMany({
      where: { category: category }
    });
  } catch (error) {
    console.log("error in reading products");
    console.log(error);
    return false;
  }
};

module.exports = {
  readAllProducts,
  readProductsByCategory,
};
