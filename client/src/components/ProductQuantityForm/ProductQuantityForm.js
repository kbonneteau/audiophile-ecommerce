import "./ProductQuantityForm.scss";
import React, { useState } from "react";
import { connect } from "react-redux";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { postCartItem } from "../../store/utils/thunkCreators";

const ProductQuantityForm = ({ slug, cartId, cartItems, postCartItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    postCartItem(cartId, { item: slug, quantity: e.target.quantity.value });
  };

  return (
    <form className="quantity-form" onSubmit={handleSubmit}>
      <QuantitySelector />
      <button className="quantity-form__add-to-cart" type="submit">
        Add to cart
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  const { cartId, cartItems } = state.cart[0];
  return {
    cartId,
    cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postCartItem: (cartId, cartItem) => {
      dispatch(postCartItem(cartId, cartItem));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductQuantityForm);
