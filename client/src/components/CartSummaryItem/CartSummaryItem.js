import React from "react";
import NumberFormat from "react-number-format";
import "./CartSummaryItem.scss";

const CartSummaryItem = ({ cartItem }) => {
  return (
    <div className="summary-item">
      <img className="summary-item__icon" src={cartItem.image} alt="icon" />
      <div className="summary-item__item-details">
        <h3 className="summary-item__product-name">{cartItem.item}</h3>
        <NumberFormat
          className="summary-item__product-price"
          value={cartItem.price}
          prefix="$ "
          displayType={"text"}
          thousandSeparator={true}
        />
      </div>
      <p className="summary-item__quantity">x{cartItem.quantity}</p>
    </div>
  );
};

export default CartSummaryItem;
