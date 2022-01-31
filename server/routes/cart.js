const router = require("express").Router();
const cartController = require("../controllers/cartController");

router
  .route("/:cartId")
  .get(cartController.getCart)
  .post(cartController.addNewCart);
// .put(async (req, res) => {
//   const { cartId } = req.params;
// });

module.exports = router;
