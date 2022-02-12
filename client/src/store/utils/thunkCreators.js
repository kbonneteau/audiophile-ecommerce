import axios from "axios";
import { v4 as uuid } from "uuid";
import { API_BASE_URL, API_CART } from "../../utils/apiUtils";
// import action creators from conversations
import {
  gotCart,
  addCartItem,
  removeAllCartItems,
  updateItemQuantity,
} from "../cart";

// Consider if request interceptors should be used for axios

// CART THUNK CREATORS

const findExistingCart = async (cartId) => {
  console.log("Existing cart found", cartId);
  const { data } = await axios.get(`${API_BASE_URL}${API_CART}/${cartId}`);
  return data;
};

const saveNewCart = async () => {
  // generate userId
  const cartId = uuid();
  console.log("No existing cart found. New user:", cartId);
  const { data } = await axios.post(`${API_BASE_URL}${API_CART}/${cartId}`);
  localStorage.setItem("token", JSON.stringify(cartId));
  return data;
};

export const fetchCart = (cartId) => async (dispatch) => {
  try {
    let data = {};
    if (cartId) {
      data = await findExistingCart(cartId);
    } else {
      data = await saveNewCart();
    }
    dispatch(gotCart(data));
  } catch (error) {
    console.error(error);
  }
};

export const postCartItem = (cartId, cartItem) => async (dispatch) => {
  try {
    // post to server to update cart.
    const result = await axios.put(
      `${API_BASE_URL}${API_CART}/${cartId}`,
      cartItem
    );
    const { items } = result.data;
    if (items) {
      dispatch(addCartItem(items));
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateCartQuantities = (cartId, items) => async (dispatch) => {
  console.log("Update cart quantities");
  console.log(cartId);
  console.log(items);
  // const cartItems = [];
  // for (const itemName in items) {
  //   cartItems.push({ item: itemName, quantity: items[itemName] });
  // }
  // console.log(cartItems);
  try {
    const result = await axios.put(
      `${API_BASE_URL}${API_CART}/${cartId}/quantity`,
      {
        cartItems: items,
      }
    );
    console.log(result);
    // dispatch(updateItemQuantity());
  } catch (error) {
    console.error(error);
  }
};

export const deleteCartItems = (cartId) => async (dispatch) => {
  try {
    const result = await axios.delete(`${API_BASE_URL}${API_CART}/${cartId}`);
    const { items } = result.data;
    if (items) {
      dispatch(removeAllCartItems());
    }
  } catch (error) {
    console.error(error);
  }
};
