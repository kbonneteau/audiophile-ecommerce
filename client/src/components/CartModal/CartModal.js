import React, { useEffect, useReducer, useMemo } from "react";
import { useDispatch } from "react-redux";

import "./CartModal.scss";
import CartQuantity from "../CartQuantity/CartQuantity";
import { deleteCartItems } from "../../store/utils/thunkCreators";

const ACTIONS = {
  ADD_ITEM_TO_STATE: "ADD_ITEM_TO_STATE",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
};

const initialState = {};

const reducer = (state, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case ACTIONS.ADD_ITEM_TO_STATE:
      return {
        ...state,
        [action.payload.item]: action.payload.quantity,
      };
    case ACTIONS.UPDATE_QUANTITY:
      return {
        ...state,
        [action.payload.item]: action.payload.quantity,
      };
    default:
      return state;
  }
};

const CartModal = ({ isOpen, onClose, cartId, cartItems }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reduxDispatch = useDispatch();
  const items = useMemo(() => {
    return cartItems;
  }, [cartItems]);

  useEffect(() => {
    if (items.length > 0) {
      items.forEach((cartItem) => {
        console.log(cartItem);
        const { item, quantity } = cartItem;
        dispatch({
          type: ACTIONS.ADD_ITEM_TO_STATE,
          payload: {
            item,
            quantity,
          },
        });
      });
    }
  }, [items]);

  const handleRemoveAll = () => {
    reduxDispatch(deleteCartItems(cartId));
  };

  const handleCheckout = () => {
    console.log("checkOUTTTT");
  };

  console.log("useReducer state", state);
  // console.log(cartItems);
  // const handleQtyChange = (newQty) => {
  //   console.log("New quantity:", newQty);
  // };

  /*
    ✅ Consider this: create individual "line item" components, each with their own "quantity, setQuantity" state pair
    - from the parent, hold the state in some kind of object (maybe useReducer?)
    - from the parent, send a dispatch to update the state

    // ✅ TODO => Dynamically create and store quantity state (and setter?) when component mounts
    // ✅ TODO => Pass state setter to QuantitySelector
    // TODO => Update state in redux store
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
          {items.map((item, i) => (
            <CartQuantity
              key={i}
              item={item.item}
              cartQuantity={item.quantity}
              dispatch={dispatch}
              action={ACTIONS.UPDATE_QUANTITY}
            />
          ))}
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </>
    )
  );
};

export default CartModal;
