import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";

import "./CheckoutSummary.scss";
import { calculateTotalCost } from "../../utils/cartUtils";
import CartSummaryItem from "../CartSummaryItem/CartSummaryItem";

const CheckoutSummary = () => {
  const cart = useSelector((state) => state.cart[0]);
  const cost = useMemo(
    () => calculateTotalCost(cart.cartItems, cart.shippingMethod, cart.taxRate),
    [cart]
  );

  return !cart ? null : (
    <article className="checkout-summary">
      <h2 className="checkout-summary__title">Summary</h2>
      {cart.cartItems.map((cartItem) => (
        <CartSummaryItem key={cartItem.item} cartItem={cartItem} />
      ))}
      <div className="checkout-summary__cost-roundup">
        <p className="checkout-summary__total">
          Total
          <NumberFormat
            className="checkout-summary__cost"
            value={cost.subtotal}
            prefix="$ "
            displayType={"text"}
            thousandSeparator={true}
          />
        </p>
        <p className="checkout-summary__total">
          Shipping{" "}
          <NumberFormat
            className="checkout-summary__cost"
            value={cost.shipping}
            prefix="$ "
            displayType={"text"}
            thousandSeparator={true}
          />
        </p>
        <p className="checkout-summary__total">
          VAT (included){" "}
          <NumberFormat
            className="checkout-summary__cost"
            value={cost.tax}
            prefix="$ "
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
          />
        </p>
        <p className="checkout-summary__total checkout-summary__total--grand">
          Grand total
          <NumberFormat
            className="checkout-summary__cost checkout-summary__cost--total"
            value={cost.total}
            prefix="$ "
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
          />
        </p>
      </div>
      <button className="checkout-form__submit" type="submit">
        Continue & Pay
      </button>
    </article>
  );
};

export default CheckoutSummary;
