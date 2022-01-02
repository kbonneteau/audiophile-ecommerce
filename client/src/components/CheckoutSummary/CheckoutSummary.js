import "./CheckoutSummary.scss";
import React from "react";

const CheckoutSummary = () => {
  return (
    <article className="checkout-summary">
      <h2 className="checkout-summary__title">Summary</h2>
      {/* map through items */}
      <div className="checkout-summary__item-container">
        <img className="checkout-summary__icon" src="" alt="icon" />
        <div className="checkout-summary__item-details">
          <h3 className="checkout-summary__product-name">product</h3>
          <p className="checkout-summary__product-price">price</p>
        </div>
        <p className="checkout-summary__quantity">x1</p>
      </div>
      <div className="checkout-summary__cost-roundup">
        <p className="checkout-summary__total">
          Total: <span className="checkout-summary__cost">$5,396</span>
        </p>
        <p className="checkout-summary__total">
          Shipping: <span className="checkout-summary__cost">$50</span>
        </p>
        <p className="checkout-summary__total">
          VAT (included): <span className="checkout-summary__cost">$1,079</span>
        </p>
        <p className="checkout-summary__grand-total">
          Grand total:
          <span className="checkout-summary__total-cost">$5,446</span>
        </p>
      </div>
      <button className="checkout-form__submit" type="submit">
        Continue & Pay
      </button>
    </article>
  );
};

export default CheckoutSummary;
