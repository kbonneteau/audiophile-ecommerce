import validator from "validator";

const REGEXP = {
  text: /^[a-z]{1}[ \-'a-z]+[a-z]{1}$/i, // name, city, country
  address: /^[#a-z0-9]{1}[ \-#',a-z0-9]+[0-9a-z]{1}$/i, // letters, numbers, spaces, # ' - allowed
  country: /^(canada|(united states|us))$/i,
  method: /^(cash|emoney)$/, // must be either 'cash' or 'emoney'
  enumber: /^[0-9]{9}$/, // must be 9 numbers
  epin: /^[0-9]{4}$/, // must be 4 numbers
};

export const selectValidator = (inputType) => {
  console.log("entering switch");
  switch (inputType) {
    case "name":
    case "city":
      return REGEXP.text.test.bind(REGEXP.text); // bind test function to REGEXP object
    case "country":
      return REGEXP.country.test.bind(REGEXP.country); // bind test function to REGEXP object
    case "phone":
      return validator.isMobilePhone;
    case "email":
      return validator.isEmail;
    case "method":
      return REGEXP.method.test.bind(REGEXP.method);
    case "address":
      return REGEXP.address.test.bind(REGEXP.address);
    case "postcode":
      return validator.isPostalCode;
    case "enumber":
      return REGEXP.enumber.test.bind(REGEXP.enumber);
    case "epin":
      return REGEXP.epin.test.bind(REGEXP.epin);
    default:
      break;
  }
};

const determineLocale = (type, country) => {
  switch (type) {
    case "phone":
      return country.toLowerCase() === "canada" ? "en-CA" : "en-US";
    case "postcode":
      return country.toLowerCase() === "canada" ? "CA" : "US";
    default:
      return false;
  }
};

/**
 * Tests if a given input is valid.
 * @param {string} type name of the input field
 * @param {string} value value of input
 * @returns {boolean} true if valid, false if not
 */
export const isInputValid = (type, value, country) => {
  // If field is empty, return false
  if (validator.isEmpty(value)) return false;
  const locale = determineLocale(type, country);
  const validationTool = selectValidator(type);
  if (type === "phone") return validationTool(value, locale);
  if (type === "postcode") return validationTool(value, locale);
  return validationTool(value);
};
