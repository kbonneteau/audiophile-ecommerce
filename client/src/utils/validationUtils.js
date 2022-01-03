import validator from "validator";

const REGEXP = {
  text: /^[a-z]{1}[ \-'a-z]+[a-z]{1}$/i, // name, city, country
  address: /^[#a-z0-9]{1}[ \-#',a-z0-9]+[0-9a-z]{1}$/i, // letters, numbers, spaces, # ' - allowed
  postcode: {
    ca: /^[a-z]{1}[0-9]{1}[a-z]{1}[ ]?[0-9]{1}[a-z]{1}[0-9]{1}$/i, // must be oxo xox, where o = letter and x = number
    us: /^[0-9]{5}(-{1}[0-9]{4})?$/ // must be either xxxxx or xxxxx-xxxx, where x = number
  },
  method: /^(cash|emoney)$/, // must be either 'cash' or 'emoney'
  enumber: /^[0-9]{9}$/, // must be 9 numbers
  epin: /^[0-9]{4}$/ // must be 4 numbers
}



export const selectValidator = (inputType) => {
  console.log("entering switch");
  switch (inputType) {
    case 'phone':
      console.log("phone")
      return validator.isMobilePhone;
    case "email":
      return validator.isEmail;
    case "method":
      ;
    default:
      break;
  }
}



/*
export const validate = (inputType, inputValue) => {
  // const validator = selectValidator(inputType);
  console.log(isMobilePhone(inputValue,"en-CA"))
  // console.log("validate function ::",validator)
  // console.log("validate type ::",inputType)
  // console.log("validate value ::",inputValue)
  return validator(inputValue);
}
*/

/**
 * 
 * @param {string} type 
 * @param {string} value 
 * @returns {boolean} true if valid, false if valid
 */
export const validate = (type, value) => {
  // If field is empty, return false
  if(validator.isEmpty(value)) return false;


}