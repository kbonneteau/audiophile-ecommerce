import React from "react";
import { useDispatch } from "react-redux";

import "./CartModal.scss";
import { deleteCartItems } from "../../store/utils/thunkCreators";

const CartModal = ({ isOpen, onClose, cartId, cartItems }) => {
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(deleteCartItems(cartId));
  };

  return (
    isOpen && (
      <>
        <div className="cart-modal__overlay" />
        <div className="cart-modal">
          <h2>Cart</h2>
          <button onClick={handleRemoveAll}>Remove all items</button>
          {cartItems.map((item, i) => (
            <React.Fragment key={i}>
              <p>
                {item.item} <span>x{item.quantity}</span>
              </p>
            </React.Fragment>
          ))}
        </div>
      </>
    )
  );
};

export default CartModal;
