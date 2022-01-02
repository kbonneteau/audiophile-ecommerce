import "./CheckoutForm.scss";
import React from "react";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";

const CheckoutForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="checkout-form__wrapper">
        <h1 className="checkout-form__title">Checkout</h1>
        <fieldset className="checkout-form__form-section">
          <legend className="checkout-form__subtitle">Billing Details</legend>
          <label className="checkout-form__input-label" htmlFor="name">
            Name
            <input
              className="checkout-form__input"
              type="text"
              name="name"
              id="name"
              placeholder="Alexei Ward"
            />
          </label>
          <label className="checkout-form__input-label" htmlFor="email">
            Email Address
            <input
              className="checkout-form__input"
              type="text"
              name="email"
              id="email"
              placeholder="alexei@mail.com"
            />
          </label>
          <label className="checkout-form__input-label" htmlFor="phone">
            Phone Number
            <input
              className="checkout-form__input"
              type="text"
              name="phone"
              id="phone"
              placeholder="+1 202-555-0136"
            />
          </label>
        </fieldset>
        <fieldset className="checkout-form__form-section">
          <legend className="checkout-form__subtitle">Shipping info</legend>
          <label
            className="checkout-form__input-label checkout-form__input-label--long"
            htmlFor="address1"
          >
            Street Address
            <input
              className="checkout-form__input"
              type="text"
              name="address1"
              id="address1"
              placeholder="1137 Williams Avenue"
            />
          </label>
          <label className="checkout-form__input-label" htmlFor="postcode">
            ZIP Code
            <input
              className="checkout-form__input"
              type="text"
              name="postcode"
              id="postcode"
              placeholder="10001"
            />
          </label>
          <label className="checkout-form__input-label" htmlFor="city">
            City
            <input
              className="checkout-form__input"
              type="text"
              name="city"
              id="city"
              placeholder="New York"
            />
          </label>
          <label className="checkout-form__input-label" htmlFor="country">
            Country
            <input
              className="checkout-form__input"
              type="text"
              name="country"
              id="country"
              placeholder="United States"
            />
          </label>
        </fieldset>
        <fieldset className="checkout-form__form-section checkout-form__form-section--payment">
          <legend className="checkout-form__subtitle">Payment details</legend>
          <p className="checkout-form__input-label">Payment Method</p>
          <div className="checkout-form__radio-container">
            <label className="checkout-form__radio-label" htmlFor="emoney">
              <input
                className="checkout-form__radio-input"
                type="radio"
                name="method"
                id="emoney"
                value="emoney"
                checked
              />
              e-Money
            </label>
            <label className="checkout-form__radio-label" htmlFor="cash">
              <input
                className="checkout-form__radio-input"
                type="radio"
                name="method"
                id="cash"
                value="cash"
              />
              Cash on Delivery
            </label>
          </div>
          {/* When selected, show this */}
          <label className="checkout-form__input-label" htmlFor="enumber">
            e-Money Number
            <input
              className="checkout-form__input"
              type="text"
              name="enumber"
              id="enumber"
              placeholder="238521993"
            />
          </label>
          <label className="checkout-form__input-label" htmlFor="epin">
            e-Money PIN
            <input
              className="checkout-form__input"
              type="password"
              name="epin"
              id="epin"
              placeholder="6891"
            />
          </label>
          {/* else, show nothing */}
        </fieldset>
      </div>
      <CheckoutSummary />
    </form>
  );
};

export default CheckoutForm;
