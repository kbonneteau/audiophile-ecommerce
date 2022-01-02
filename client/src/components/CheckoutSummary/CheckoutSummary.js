import "./CheckoutSummary.scss";
import React from "react";
import NumberFormat from "react-number-format";

const MOCK_CART = [
  {
    name: "XX99 MK II",
    image:
      "http://localhost:8080/images/shared/mobile/image-xx99-mark-two-headphones.jpg",
    price: 2999,
    quantity: 1,
  },
  {
    name: "XX59",
    image:
      "http://localhost:8080/images/shared/mobile/image-xx59-headphones.jpg",
    price: 899,
    quantity: 2,
  },
  {
    name: "YX1",
    image:
      "http://localhost:8080/images/products/product-yx1-earphones/mobile/image-product.jpg",
    price: 599,
    quantity: 1,
  },
];

const CheckoutSummary = () => {
  return (
    <article className="checkout-summary">
      <h2 className="checkout-summary__title">Summary</h2>
      {/* map through items */}
      {MOCK_CART.map((cartItem) => (
        <div className="checkout-summary__item-container">
          <img
            className="checkout-summary__icon"
            src={cartItem.image}
            alt="icon"
          />
          <div className="checkout-summary__item-details">
            <h3 className="checkout-summary__product-name">{cartItem.name}</h3>
            <NumberFormat
              className="checkout-summary__product-price"
              value={cartItem.price}
              prefix="$ "
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>
          <p className="checkout-summary__quantity">x{cartItem.quantity}</p>
        </div>
      ))}
      <div className="checkout-summary__cost-roundup">
        <p className="checkout-summary__total">
          Total
          <NumberFormat
            className="checkout-summary__cost"
            value={5396}
            prefix="$ "
            displayType={"text"}
            thousandSeparator={true}
          />
        </p>
        <p className="checkout-summary__total">
          Shipping{" "}
          <NumberFormat
            className="checkout-summary__cost"
            value={50}
            prefix="$ "
            displayType={"text"}
            thousandSeparator={true}
          />
        </p>
        <p className="checkout-summary__total">
          VAT (included){" "}
          <NumberFormat
            className="checkout-summary__cost"
            value={1079}
            prefix="$ "
            displayType={"text"}
            thousandSeparator={true}
          />
        </p>
        <p className="checkout-summary__total checkout-summary__total--grand">
          Grand total
          <NumberFormat
            className="checkout-summary__cost checkout-summary__cost--total"
            value={5446}
            prefix="$ "
            displayType={"text"}
            thousandSeparator={true}
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
