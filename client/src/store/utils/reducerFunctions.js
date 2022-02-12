// Can update quantities + add item be combined?

export const addItemToStore = (state, payload) => {
  return state.map((cart) => {
    return {
      ...cart,
      cartItems: payload.items,
    };
  });
};

export const removeItemsFromStore = (state) => {
  return state.map((cart) => {
    return {
      ...cart,
      cartItems: [],
    };
  });
};

export const updateQuantitiesInStore = (state, payload) => {
  return state.map((cart) => {
    return {
      ...cart,
      cartItems: payload.items,
    };
  });
};
