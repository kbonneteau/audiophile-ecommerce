import React, { useEffect, useReducer, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./CartModal.scss";
import CartQuantity from "../CartQuantity/CartQuantity";
import {
  deleteCartItems,
  updateCartQuantities,
} from "../../store/utils/thunkCreators";

const ACTIONS = {
  ADD_ITEM_TO_STATE: "ADD_ITEM_TO_STATE",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  RESET_STATE: "RESET_STATE",
};

const initialState = {
  items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM_TO_STATE:
      return {
        ...state,
        items: [
          ...state.items,
          {
            item: action.payload.item,
            quantity: action.payload.quantity,
          },
        ],
      };
    case ACTIONS.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.item === action.payload.item) {
            return {
              ...item,
              quantity: action.payload.quantity,
            };
          }
          return item;
        }),

        // [

        //   ...state.items,
        //   {
        //     item: action.payload.item,
        //     quantity: action.payload.quantity,
        //   },
        // ],
        // [action.payload.item]: action.payload.quantity,
      };
    default:
      return state;
  }
};

const CartModal = ({ isOpen, onClose, cartId, cartItems }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const items = useMemo(() => {
    return cartItems;
  }, [cartItems]);

  useEffect(() => {
    // Add each of the cart items to component state
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

  const handleCheckout = async () => {
    console.log("checkOUTTTT");
    reduxDispatch(updateCartQuantities(cartId, state.items));
    navigate("/checkout");
    onClose();
  };

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
