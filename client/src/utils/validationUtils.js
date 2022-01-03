import validator from "validator";

const REGEXP = {
  text: /^[a-z]{1}[ \-'a-z]+[a-z]{1}$/i, // name, city, country
  address: /^[#a-z0-9]{1}[ \-#',a-z0-9]+[0-9a-z]{1}$/i, // letters, numbers, spaces, # ' - allowed
  postcode: {
    ca: /^[a-z]{1}[0-9]{1}[a-z]{1}[ ]?[0-9]{1}[a-z]{1}[0-9]{1}$/i, // must be oxo xox, where o = letter and x = number
    us: /^[0-9]{5}(-{1}[0-9]{4})?$/, // must be either xxxxx or xxxxx-xxxx, where x = number
  },
  method: /^(cash|emoney)$/, // must be either 'cash' or 'emoney'
  enumber: /^[0-9]{9}$/, // must be 9 numbers
  epin: /^[0-9]{4}$/, // must be 4 numbers
};

// CURRENT ISSUES:
// - ca post code value always produces false (the value is always a string)

export const selectValidator = (inputType) => {
  console.log("entering switch");
  switch (inputType) {
    case "name":
    case "city":
    case "country":
      return REGEXP.text.test.bind(REGEXP.text); // bind test function to REGEXP object
    case "phone":
      return validator.isMobilePhone;
    case "email":
      return validator.isEmail;
    case "method":
      return REGEXP.method.test.bind(REGEXP.method);
    case "address":
      return REGEXP.address.test.bind(REGEXP.address);
    case "postcode":
      return REGEXP.postcode.ca.test.bind(REGEXP.postcode.us);
    case "enumber":
      return REGEXP.enumber.test.bind(REGEXP.enumber);
    case "epin":
      return REGEXP.epin.test.bind(REGEXP.epin);
    default:
      break;
  }
};

/**
 * Tests if a given input is valid.
 * @param {string} type name of the input field
 * @param {string} value value of input
 * @returns {boolean} true if valid, false if not
 */
export const isInputValid = (type, value) => {
  // If field is empty, return false
  if (validator.isEmpty(value)) return false;
  const validationTool = selectValidator(type);
  return type === "phone"
    ? validationTool(value, "en-CA")
    : validationTool(value);
};
