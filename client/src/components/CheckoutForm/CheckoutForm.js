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
        <fieldset className="checkout-form__form-section">
          <legend className="checkout-form__subtitle">Billing Details</legend>
          <label className="checkout-form__input-label" htmlFor="name">
            Name
          </label>
          <input
            className="checkout-form__input"
            type="text"
            name="name"
            id="name"
            placeholder="Alexei Ward"
          />
          <label className="checkout-form__input-label" htmlFor="email">
            Email Address
          </label>
          <input
            className="checkout-form__input"
            type="text"
            name="email"
            id="email"
            placeholder="alexei@mail.com"
          />
          <label className="checkout-form__input-label" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="checkout-form__input"
            type="text"
            name="phone"
            id="phone"
            placeholder="+1 202-555-0136"
          />
        </fieldset>
        <fieldset className="checkout-form__form-section">
          <legend className="checkout-form__subtitle">Shipping info</legend>
          <label className="checkout-form__input-label" htmlFor="address1">
            Street Address
          </label>
          <input
            className="checkout-form__input"
            type="text"
            name="address1"
            id="address1"
            placeholder="1337 Williams Avenue"
          />
          <label className="checkout-form__input-label" htmlFor="postcode">
            ZIP Code
          </label>
          <input
            className="checkout-form__input"
            type="text"
            name="postcode"
            id="postcode"
            placeholder="10001"
          />
          <label className="checkout-form__input-label" htmlFor="city">
            City
          </label>
          <input
            className="checkout-form__input"
            type="text"
            name="city"
            id="city"
            placeholder="New York"
          />
          <label className="checkout-form__input-label" htmlFor="country">
            Country
          </label>
          <input
            className="checkout-form__input"
            type="text"
            name="country"
            id="country"
            placeholder="United States"
          />
        </fieldset>
        <fieldset className="checkout-form__form-section">
          <legend className="checkout-form__subtitle">Payment details</legend>
          <p>Payment Method</p>
          <input
            type="radio"
            name="method"
            id="emoney"
            value="emoney"
            checked
          />
          <label className="checkout-form__input-label" htmlFor="emoney">
            e-Money
          </label>
          <input type="radio" name="method" id="cash" value="cash" />
          <label className="checkout-form__input-label" htmlFor="cash">
            Cash on Delivery
          </label>
          <label className="checkout-form__input-label" htmlFor="enumber">
            e-Money Number
          </label>
          <input
            className="checkout-form__input"
            type="text"
            name="enumber"
            id="enumber"
            placeholder="238521993"
          />
          <label className="checkout-form__input-label" htmlFor="epin">
            e-Money PIN
          </label>
          <input
            className="checkout-form__input"
            type="password"
            name="epin"
            id="epin"
            placeholder="6891"
          />
          {/* radio */}
          {/* When selected, show this */}
          {/* else, show this */}
        </fieldset>
      </div>
      <CheckoutSummary />
    </form>
  );
};

export default CheckoutForm;
