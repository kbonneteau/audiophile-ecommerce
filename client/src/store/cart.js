import {
  addItemToStore,
  removeItemsFromStore,
  updateQuantitiesInStore,
} from "./utils/reducerFunctions";

// ACTIONS

const GET_CART = "GET_CART";
const ADD_CART_ITEM = "ADD_CART_ITEM";
const REMOVE_CART_ITEMS = "REMOVE_CART_ITEMS";
const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";

// ACTION CREATORS

export const gotCart = (cart) => {
  return {
    type: GET_CART,
    cart,
  };
};

export const addCartItem = (items) => {
  return {
    type: ADD_CART_ITEM,
    payload: {
      items,
    },
  };
};

export const updateItemQuantity = (items) => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: {
      items,
    },
  };
};

export const removeAllCartItems = () => {
  return {
    type: REMOVE_CART_ITEMS,
  };
};

// REDUCER

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_CART_ITEM:
      return addItemToStore(state, action.payload);
    case REMOVE_CART_ITEMS:
      return removeItemsFromStore(state);
    case UPDATE_CART_QUANTITY:
      return updateQuantitiesInStore(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
