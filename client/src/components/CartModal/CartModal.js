import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./CartModal.scss";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { deleteCartItems } from "../../store/utils/thunkCreators";

const CartModal = ({ isOpen, onClose, cartId, cartItems }) => {
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(deleteCartItems(cartId));
  };
  console.log(cartItems);
  // const handleQtyChange = (newQty) => {
  //   console.log("New quantity:", newQty);
  // };

  /*
    Consider this: create individual "line item" components, each with their own "quantity, setQuantity" state pair
    - from the parent, hold the state in some kind of object (maybe useReducer?)
    - from the parent, send a dispatch to update the state

    // TODO => Dynamically create and store quantity state (and setter?) when component mounts
    // TODO => Pass state setter to QuantitySelector
    // TODO => Post state on checkout form submission

    Wrap the quantity selector in a form tag:
    - pass the price of the item to this modal
    - dynamically calculate prices based on quantity changes
    - clicking on checkout posts an update to all quantities
        - closing the modal does not
    - redirect to checkout
  */

  return (
    isOpen && (
      <>
        <div className="cart-modal__overlay" />
        <div className="cart-modal">
          <h2>Cart</h2>
          <button onClick={handleRemoveAll}>Remove all items</button>
          {cartItems.map((item, i) => (
            <React.Fragment key={i}>
              <p>{item.item} </p>
              <QuantitySelector
                quantity={item.quantity}
                // handleQtyChange={handleQtyChange}
              />
            </React.Fragment>
          ))}
        </div>
      </>
    )
  );
};

export default CartModal;
