export const addItemToStore = (state, payload) => {
  return state.map((cart) => {
    return {
      ...cart,
      cartItems: payload.items,
    };
  });
};

export const removeItemsFromStore = (state) => {
  console.log("remove items from store");
  return state.map((cart) => {
    return {
      ...cart,
      cartItems: [],
    };
  });
};
