import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductQuantityForm.scss";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { postCartItem } from "../../store/utils/thunkCreators";

const ProductQuantityForm = ({ slug }) => {
  const cartId = useSelector((state) => state.cart[0].cartId);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postCartItem(cartId, { item: slug, quantity: e.target.quantity.value })
    );
    setQuantity(1);
  };

  return (
    <form className="quantity-form" onSubmit={handleSubmit}>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <button className="quantity-form__add-to-cart" type="submit">
        Add to cart
      </button>
    </form>
  );
};

export default ProductQuantityForm;
