import { createStore, applyMiddleware, combineReducers } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

import cart from "./cart";

// TODO: Initialize state with either local storage, or start a new session
// TODO: Set up JWT or express session to handle cart expiry (24 hours)
// ✅ TODO: Set up DB cart collection
// ✅ TODO: Set up DB seed for testing and resetting data
// TODO: Set up Redux for removing cart items (cart modal)
// TODO: Set up Redux for updating existing cart items (cart modal)

const appReducer = combineReducers({ cart });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;

/* STORE 

INITIALIZATION
- On application load, check local storage for a cart session string

if it exists: 
    - Make a thunk request to retrieve cart and resume cart session
else:
    - post for a new cart session to start
    - generate a uniqueID to send to backend

- Store the cart contents in state

ADD/UPDATE CART ITEMS
When user makes any cart changes, make a thunk request to server to update server-side data

then, update state to reflect all changes

REMOVE ALL ITEMS
same as above.
Make server request to update data
Reflect updates in store

CHECKOUT
post to server
destroy cart session

*/

/* STATE STRUCTURE

state = {
    cartId: uniqueId,
    user: "guest",
    taxRate: float,
    shippingMethod: "standard",
    cartItems: [
        {
            cartItemId: uniqueId,
            productId: id,
            productName: string,
            productImage: string,
            unitPrice: float,
            qty: int,
        }
    ]
}

*/

/* BACK-END:

REMINDERS:
- sanitize all requests

POST /cart
- return cartId with cart initialized

GET /cart/:cartId

- On application load, if a cart session is active, send the user's cart information back to user


PUT /cart/:cartId
- add new cart items
- update current cart qty
- remove item if qty = 0


DELETE /cart/:cartId
- remove all current cart items

POST /cart/:cartId/checkouT
TBD

*/
