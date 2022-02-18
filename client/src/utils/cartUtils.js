export const calculateCart = (items) => {
  let cost = 0;
  items.forEach((item) => {
    cost += item.price * item.quantity;
  });
  console.log(cost);
  return cost;
};
