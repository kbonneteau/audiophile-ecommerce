import "./CheckoutSummary";
import React from "react";

const CheckoutSummary = () => {
  return (
    <article className="checkout-summary">
      <h2 className="checkout-summary__title">Summary</h2>
      {/* map through items */}
      <div>
        <p>this is an item</p>
        <p>this is an item</p>
        <p>this is an item</p>
      </div>
      <p>Total: $5,396</p>
      <p>Shipping: $50</p>
      <p>VAT (included): $1,079</p>
      <p>Grand total: $5,446</p>
      <button className="checkout-form__submit" type="submit">
        Continue & Pay
      </button>
    </article>
  );
};

export default CheckoutSummary;
