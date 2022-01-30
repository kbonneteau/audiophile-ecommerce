import "./CheckoutForm.scss";
import React, { useState, useReducer } from "react";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";
import { isInputValid } from "../../utils/validationUtils";

const ACTIONS = {
  UPDATE_VALUE: "update input value",
  UPDATE_ERROR: "update error status",
};

// Should both the value and the error be held in state?
const initialState = {
  name: {
    value: "",
    error: false,
  },
  email: {
    value: "",
    error: false,
  },
  phone: {
    value: "",
    error: false,
  },
  address: {
    value: "",
    error: false,
  },
  postcode: {
    value: "",
    error: false,
  },
  city: {
    value: "",
    error: false,
  },
  country: {
    value: "",
    error: false,
  },
  method: {
    value: "",
    error: false,
  },
  enumber: {
    value: "",
    error: false,
  },
  epin: {
    value: "",
    error: false,
  },
};

// CURRENT TASKS:
// ✅ TODO: update reducer to handle value change with updated state schema
// ✅ TODO: add UPDATE_ERROR to actions
// ✅ TODO: add validation logic to handleBlur for validating field
// ✅ TODO: add dynamic error fields to each of the form fields
// TODO: add submit logic functionality:
//        - If any errors, don't submit
//        - Complete a final check for errors
//        - depending on payment method, don't check epin and emoney number if cash
// Should I promisify the validation check? resolve success, reject on validation fail....
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_VALUE:
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          value: action.payload.value,
        },
      };
    case ACTIONS.UPDATE_ERROR:
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          error: action.payload.errorStatus,
        },
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
    // console.log(state);
    for (const formField in state) {
      console.log(`${formField}: ${state[formField].value}`);
      console.log(
        "is this a valid input?",
        isInputValid(formField, state[formField].value, state.country.value)
      );
    }
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

  const handleBlur = (e) => {
    const { name } = e.target;

    // check if the input is valid
    dispatch({
      type: ACTIONS.UPDATE_ERROR,
      payload: {
        field: name,
        errorStatus: isInputValid(
          name,
          state[name].value,
          state.country.value || "us"
        )
          ? false
          : true,
      },
    });
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="checkout-form__wrapper">
        <h1 className="checkout-form__title">Checkout</h1>

        <fieldset className="checkout-form__form-section">
          <legend className="checkout-form__subtitle">Billing Details</legend>
          <label
            className={
              state.name.error
                ? "checkout-form__input-label--error"
                : "checkout-form__input-label"
            }
            htmlFor="name"
          >
            Name
            {state.name.error && (
              <span className="error-message">Invalid name</span>
            )}
            <input
              className={
                state.name.error
                  ? "checkout-form__input--error"
                  : "checkout-form__input"
              }
              type="text"
              name="name"
              id="name"
              placeholder="Alexei Ward"
              value={state.name.value}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>

          <label
            className={
              state.email.error
                ? "checkout-form__input-label--error"
                : "checkout-form__input-label"
            }
            htmlFor="email"
          >
            Email Address
            {state.email.error && (
              <span className="error-message">Invalid email address</span>
            )}
            <input
              className={
                state.email.error
                  ? "checkout-form__input--error"
                  : "checkout-form__input"
              }
              type="text"
              name="email"
              id="email"
              placeholder="alexei@mail.com"
              value={state.email.value}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>

          <label
            className={
              state.phone.error
                ? "checkout-form__input-label--error"
                : "checkout-form__input-label"
            }
            htmlFor="phone"
          >
            Phone Number
            {state.phone.error && (
              <span className="error-message">Invalid phone number</span>
            )}
            <input
              className={
                state.phone.error
                  ? "checkout-form__input--error"
                  : "checkout-form__input"
              }
              type="text"
              name="phone"
              id="phone"
              placeholder="+1 202-555-0136"
              onChange={handleChange}
              onBlur={handleBlur}
              value={state.phone.value}
            />
          </label>
        </fieldset>

        <fieldset className="checkout-form__form-section">
          <legend className="checkout-form__subtitle">Shipping info</legend>
          <label
            className={
              state.address.error
                ? "checkout-form__input-label--error checkout-form__input-label--long"
                : "checkout-form__input-label checkout-form__input-label--long"
            }
            htmlFor="address"
          >
            Street Address
            {state.address.error && (
              <span className="error-message">Invalid street address</span>
            )}
            <input
              className={
                state.address.error
                  ? "checkout-form__input--error"
                  : "checkout-form__input"
              }
              type="text"
              name="address"
              id="address"
              placeholder="1137 Williams Avenue"
              onChange={handleChange}
              onBlur={handleBlur}
              value={state.address.value}
            />
          </label>

          <label
            className={
              state.postcode.error
                ? "checkout-form__input-label--error"
                : "checkout-form__input-label"
            }
            htmlFor="postcode"
          >
            ZIP Code
            {state.postcode.error && (
              <span className="error-message">Invalid ZIP or postal code</span>
            )}
            <input
              className={
                state.postcode.error
                  ? "checkout-form__input--error"
                  : "checkout-form__input"
              }
              type="text"
              name="postcode"
              id="postcode"
              placeholder="10001"
              onChange={handleChange}
              onBlur={handleBlur}
              value={state.postcode.value}
            />
          </label>

          <label
            className={
              state.city.error
                ? "checkout-form__input-label--error"
                : "checkout-form__input-label"
            }
            htmlFor="city"
          >
            City
            {state.city.error && (
              <span className="error-message">Invalid city</span>
            )}
            <input
              className={
                state.city.error
                  ? "checkout-form__input--error"
                  : "checkout-form__input"
              }
              type="text"
              name="city"
              id="city"
              placeholder="New York"
              onChange={handleChange}
              onBlur={handleBlur}
              value={state.city.value}
            />
          </label>

          <label
            className={
              state.country.error
                ? "checkout-form__input-label--error"
                : "checkout-form__input-label"
            }
            htmlFor="country"
          >
            Country
            {state.country.error && (
              <span className="error-message">
                Must be within United States or Canada
              </span>
            )}
            <input
              className={
                state.country.error
                  ? "checkout-form__input--error"
                  : "checkout-form__input"
              }
              type="text"
              name="country"
              id="country"
              placeholder="United States"
              onChange={handleChange}
              onBlur={handleBlur}
              value={state.country.value}
            />
          </label>
        </fieldset>

        <fieldset className="checkout-form__form-section checkout-form__form-section--payment">
          <legend className="checkout-form__subtitle">Payment details</legend>
          <p className="checkout-form__input-label">Payment Method</p>
          <div className="checkout-form__radio-container">
            <label
              className={
                state.method.value === "emoney"
                  ? "checkout-form__radio-label checkout-form__radio-label--selected"
                  : "checkout-form__radio-label"
              }
              htmlFor="emoney"
            >
              <input
                className="checkout-form__radio-input"
                type="radio"
                name="method"
                id="emoney"
                value="emoney"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              e-Money
            </label>

            <label
              className={
                state.method.value === "cash"
                  ? "checkout-form__radio-label checkout-form__radio-label--selected"
                  : "checkout-form__radio-label"
              }
              htmlFor="cash"
            >
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

          {/* When emoney is selected, show payment info */}
          {state.method.value === "emoney" && (
            <>
              <label
                className={
                  state.enumber.error
                    ? "checkout-form__input-label--error"
                    : "checkout-form__input-label"
                }
                htmlFor="enumber"
              >
                e-Money Number
                {state.enumber.error && (
                  <span className="error-message">Invalid e-Money number</span>
                )}
                <input
                  className={
                    state.enumber.error
                      ? "checkout-form__input--error"
                      : "checkout-form__input"
                  }
                  type="text"
                  name="enumber"
                  id="enumber"
                  placeholder="238521993"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={state.enumber.value}
                />
              </label>

              <label
                className={
                  state.epin.error
                    ? "checkout-form__input-label--error"
                    : "checkout-form__input-label"
                }
                htmlFor="epin"
              >
                e-Money PIN
                {state.epin.error && (
                  <span className="error-message">
                    Please enter your 4-digit PIN
                  </span>
                )}
                <input
                  className={
                    state.epin.error
                      ? "checkout-form__input--error"
                      : "checkout-form__input"
                  }
                  type="password"
                  name="epin"
                  id="epin"
                  placeholder="6891"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={state.epin.value}
                />
              </label>
            </>
          )}
        </fieldset>
      </div>
      <CheckoutSummary />
    </form>
  );
};

export default CheckoutForm;
