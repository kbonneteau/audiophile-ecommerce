const router = require("express").Router();
const cartController = require("../controllers/cartController");

router
  .route("/:cartId")
  .get(cartController.getSingleCart)
  .post(cartController.addNewCart)
  .put(cartController.updateCartItems)
  .delete(cartController.deleteCartItems);

router.route("/:cartId/quantity").put(cartController.updateCartQuantities);

module.exports = router;
