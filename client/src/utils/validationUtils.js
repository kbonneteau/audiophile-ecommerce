import validator from "validator";

export const selectValidator = (inputType) => {
  console.log("entering switch");
  switch (inputType) {
    case 'phone':
      console.log("phone")
      return validator.isMobilePhone;
    case "email":
      return validator.isEmail;
    default:
      break;
  }
}

// export const validate = (inputType, inputValue) => {
//   // const validator = selectValidator(inputType);
//   console.log(isMobilePhone(inputValue,"en-CA"))
//   // console.log("validate function ::",validator)
//   // console.log("validate type ::",inputType)
//   // console.log("validate value ::",inputValue)
//   return validator(inputValue);
// }