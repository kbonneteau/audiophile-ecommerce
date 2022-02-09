export const addItemToStore = (state, payload) => {
  return state.map((cart) => {
    return {
      ...cart,
      items: payload.items,
    };
  });
};

export const removeItemsFromStore = (state) => {
  return state.map((cart) => {
    return {
      ...cart,
      items: [],
    };
  });
};
