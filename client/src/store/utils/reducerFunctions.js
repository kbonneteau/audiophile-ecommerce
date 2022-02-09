export const addItemToStore = (state, payload) => {
  console.log("Payload:", payload);
  console.log("state:", state);
  return state.map((cart) => {
    return {
      ...cart,
      items: payload.items,
    };
  });
};
