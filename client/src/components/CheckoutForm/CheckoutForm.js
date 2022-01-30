import "./CheckoutForm.scss";
import React, { useReducer } from "react";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";
import { isInputValid } from "../../utils/validationUtils";

const ACTIONS = {
  UPDATE_VALUE: "update input value",
  UPDATE_ERROR: "update error status",
};

const initialStateValue = {
  value: "",
  error: false,
};

const initialState = {
  name: initialStateValue,
  email: initialStateValue,
  phone: initialStateValue,
  address: initialStateValue,
  postcode: initialStateValue,
  city: initialStateValue,
  country: initialStateValue,
  method: initialStateValue,
  enumber: initialStateValue,
  epin: initialStateValue,
};

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = false;

    for (const formField in state) {
      // Do a final validity check for all form fields
      const isValid = isInputValid(
        formField,
        state[formField].value,
        state.country.value || "us"
      );

      // remove errors for now valid input
      if (isValid && state[formField].error) {
        dispatch({
          type: ACTIONS.UPDATE_ERROR,
          payload: {
            field: formField,
            errorStatus: false,
          },
        });
      }

      if (!isValid) {
        if (
          (formField === "enumber" || formField === "epin") &&
          state.method.value === "cash"
        ) {
          break;
        }

        error = true;
        // set errors for form fields if not already set
        !state[formField].error &&
          dispatch({
            type: ACTIONS.UPDATE_ERROR,
            payload: {
              field: formField,
              errorStatus: true,
            },
          });
      }
    }

    if (error) return;
    // TODO: send payment information forward
    console.log("finished checking all values -- no errors");
  };

  const handleChange = (e) => {
    dispatch({
      type: ACTIONS.UPDATE_VALUE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    // check if input is valid and set error message accordingly
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
