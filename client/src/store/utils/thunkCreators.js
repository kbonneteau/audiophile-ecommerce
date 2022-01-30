import axios from "axios";
import { v4 as uuid } from 'uuid';
import { gotCart } from "../cart"
import { API_BASE_URL, API_CART } from "../../utils/apiUtils";
// import action creators from conversations

// Consider if request interceptors should be used for axios

// CART THUNK CREATORS

const findExistingCart = async (cartId) => {
    console.log("Existing cart found", cartId)
    const { data } = await axios.get(`${API_BASE_URL}${API_CART}/${cartId}`);
    return data;
}

const saveNewCart = async () => {
    // generate userId
    const cartId = uuid();
    console.log("No existing cart found. New user:", cartId)
    const { data } = await axios.post(`${API_BASE_URL}${API_CART}/${cartId}`, );
    localStorage.setItem("token", JSON.stringify(cartId))
    return data;
}

export const fetchCart = (cartId) => async (dispatch) => {
    console.log("thunk creator entered")
    try{
        let data = {};
        if (cartId) {
            data = await findExistingCart(cartId);
        } else {
            data = await saveNewCart()
        }
        dispatch(gotCart(data));
    } catch (error) {
        console.error(error);
    }
}