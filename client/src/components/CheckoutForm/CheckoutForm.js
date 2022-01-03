import "./CheckoutForm.scss";
import React, { useState, useReducer } from "react";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";
// import validator from "validator";
// import { selectValidator } from "../../utils/validationUtils";

const ACTIONS = {
  UPDATE_VALUE: "update input value",
};

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  postcode: "",
  city: "",
  country: "",
  method: "",
  enumber: "",
  epin: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_VALUE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};

const CheckoutForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // eslint-disable-next-line
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    console.log(state);
  };

  const handleChange = (e) => {
    dispatch({
      type: ACTIONS.UPDATE_VALUE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });

    // const validationTool = selectValidator(inputType);
    // if (validationTool(e.target.value, "en-CA")) {
    //   setError(false);
    // } else {
    //   if (!error) setError(true);
    // }
    // console.log(
    //   "is this a valid phone number?",
    //   validationTool(e.target.value, "en-CA")
    // );
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
              value={state.name}
              onChange={handleChange}
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
              value={state.email}
              onChange={handleChange}
            />
          </label>
          <label
            className={
              error
                ? "checkout-form__input-label--error"
                : "checkout-form__input-label"
            }
            htmlFor="phone"
          >
            Phone Number
            {error && (
              <span className="error-message">Invalid phone number</span>
            )}
            <input
              className={
                error ? "checkout-form__input--error" : "checkout-form__input"
              }
              type="text"
              name="phone"
              id="phone"
              placeholder="+1 202-555-0136"
              onChange={handleChange}
              value={state.phone}
            />
          </label>
        </fieldset>
        <fieldset className="checkout-form__form-section">
          <legend className="checkout-form__subtitle">Shipping info</legend>
          <label
            className="checkout-form__input-label checkout-form__input-label--long"
            htmlFor="address"
          >
            Street Address
            <input
              className="checkout-form__input"
              type="text"
              name="address"
              id="address"
              placeholder="1137 Williams Avenue"
              onChange={handleChange}
              value={state.address}
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
              onChange={handleChange}
              value={state.postcode}
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
              onChange={handleChange}
              value={state.city}
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
              onChange={handleChange}
              value={state.country}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
              onChange={handleChange}
              value={state.enumber}
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
              onChange={handleChange}
              value={state.epin}
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
