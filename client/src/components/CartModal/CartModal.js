import React, { useEffect, useReducer, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";

import "./CartModal.scss";
import CartItem from "../CartItem/CartItem";
import {
  deleteCartItems,
  updateCartQuantities,
} from "../../store/utils/thunkCreators";
import { calculateCart } from "../../utils/cartUtils";

const ACTIONS = {
  ADD_ITEM_TO_STATE: "ADD_ITEM_TO_STATE",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  RESET_STATE: "RESET_STATE",
  REMOVE_ALL_ITEMS: "REMOVE_ALL_ITEMS",
};

const initialState = {
  items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM_TO_STATE:
      const { image, item, quantity, price } = action.payload;
      return {
        ...state,
        items: [
          ...state.items,
          {
            image,
            item,
            quantity,
            price,
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
      };
    case ACTIONS.REMOVE_ALL_ITEMS:
      return {
        ...state,
        items: [],
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
        const { image, item, price, quantity } = cartItem;
        dispatch({
          type: ACTIONS.ADD_ITEM_TO_STATE,
          payload: {
            image,
            item,
            price,
            quantity,
          },
        });
      });
    }
  }, [cartItems]);

  const handleRemoveAll = () => {
    reduxDispatch(deleteCartItems(cartId));
    dispatch({ type: ACTIONS.REMOVE_ALL_ITEMS });
  };

  const handleCheckout = async () => {
    await reduxDispatch(updateCartQuantities(cartId, state.items));
    navigate("/checkout");
    onClose();
  };

  /*
    // ✅ TODO => Update the cart cost every time the quantity changes
    // TODO => hide checkout button when no cart items
    // TODO => if all quantity is 0
      - trigger handleRemoveAll
  */

  return (
    isOpen && (
      <>
        <div className="cart-modal__overlay" />
        <div className="cart-modal">
          <div className="cart-modal__title-container">
            <h2 className="cart-modal__overview">
              Cart ({state.items.length})
            </h2>
            <button
              className="cart-modal__remove-items"
              onClick={handleRemoveAll}
            >
              Remove all
            </button>
          </div>
          <div className="cart-modal__items">
            {state.items.map((item, i) => (
              <CartItem
                key={i}
                image={item.image}
                item={item.item}
                price={item.price}
                cartQuantity={item.quantity}
                dispatch={dispatch}
                action={ACTIONS.UPDATE_QUANTITY}
              />
            ))}
          </div>
          <div className="cart-modal__subtotal-container">
            <p className="cart-modal__subtotal">Total</p>
            <NumberFormat
              className="cart-modal__cost"
              value={calculateCart(state.items)}
              prefix="$"
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>
          <button className="cart-modal__checkout" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </>
    )
  );
};

export default CartModal;
