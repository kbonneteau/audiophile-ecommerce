// import reducerFunctions

// ACTIONS

const GET_CART = "GET_CART";

// ACTION CREATORS

export const gotCart = (cart) => {
  return {
    type: GET_CART,
    cart,
  };
};

// REDUCER

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    default:
      return state;
  }
};

export default reducer;
