import "./ProductQuantityForm.scss";
import React from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const ProductQuantityForm = ({ id }) => {
  return (
    <form className="quantity-form" onSubmit={(e) => e.preventDefault()}>
      <QuantitySelector />
      <button className="quantity-form__add-to-cart" type="submit">
        Add to cart
      </button>
    </form>
  );
};

export default ProductQuantityForm;
