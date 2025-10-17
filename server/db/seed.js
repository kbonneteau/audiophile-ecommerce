require("dotenv").config();
const { getPrismaClient, disconnectPrisma } = require("./prisma-client");
const productsData = require("../data.json");

const seed = async () => {
  console.log("seeding...");

  const prisma = getPrismaClient();

  try {
    // Clear existing data
    await prisma.cart.deleteMany();
    await prisma.product.deleteMany();
    console.log("Cleared existing data");

    // Seed products from data.json
    const products = productsData.map(product => ({
      slug: product.slug,
      name: product.name,
      category: product.category,
      new: product.new,
      price: product.price,
      description: product.description,
      features: product.features,
      image: product.image,
      categoryImage: product.categoryImage,
      gallery: product.gallery,
      includes: product.includes,
      others: product.others
    }));

    const createdProducts = await prisma.product.createMany({
      data: products
    });
    console.log(`${createdProducts.count} products were inserted`);

    // Seed test cart
    const testCart = await prisma.cart.create({
      data: {
        cartId: "44a4ad0c-8422-42af-89be-df2e7ae521d7",
        user: "guest",
        taxRate: 0.2,
        shippingMethod: "standard",
        cartItems: [],
      }
    });
    console.log(`Test cart created with ID: ${testCart.cartId}`);

  } catch (error) {
    console.log("error in seeding data");
    console.log(error);
    return false;
  } finally {
    console.log("seeding complete... closing db connection...");
    await disconnectPrisma();
    console.log("db connection closed");
  }
};

if (module === require.main) {
  seed();
}
