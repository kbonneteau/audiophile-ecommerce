import React from "react";
import { connect } from "react-redux";

import "./CartModal.scss";
import { deleteCartItems } from "../../store/utils/thunkCreators";

const CartModal = ({ isOpen, onClose, cart, deleteCartItems }) => {
  console.log("IsOpen:", isOpen);
  console.log("cart modal cart", cart);

  const handleRemoveAll = () => {
    deleteCartItems(cart.cartId);
  };

  return (
    isOpen && (
      <>
        <div className="cart-modal__overlay" />
        <div className="cart-modal">
          <h2>Cart</h2>
          <button onClick={handleRemoveAll}>Remove all items</button>
          {cart.cartItems.map((item, i) => (
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCartItems: (cartId) => {
      dispatch(deleteCartItems(cartId));
    },
  };
};

export default connect(null, mapDispatchToProps)(CartModal);
