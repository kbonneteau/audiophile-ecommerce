const router = require("express").Router();
const cartController = require("../controllers/cartController");

router
  .route("/:cartId")
  .get(cartController.getSingleCart)
  .post(cartController.addNewCart)
  .put(cartController.updateCartItems);

module.exports = router;
