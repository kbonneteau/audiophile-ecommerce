import axios from "axios";
import { v4 as uuid } from 'uuid';
import { gotCart } from "../cart"
// import action creators from conversations

// Consider if request interceptors should be used for axios

// CART THUNK CREATORS

const findExistingCart = async (cartId) => {
    console.log("Existing cart found", cartId)
    const { data } = await axios.get(`/cart/${cartId}`);
    return data;
}

const saveNewCart = async () => {
    // generate userId
    const userId = uuid();
    console.log("No existing cart found. New user:", userId)
    const { data } = await axios.post(`/cart/${userId}`, );
    return data;
}

export const fetchCart = (cartId) => async (dispatch) => {
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