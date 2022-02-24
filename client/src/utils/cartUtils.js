export const calculateCart = (items) => {
  let cost = 0;
  items.forEach((item) => {
    cost += item.price * item.quantity;
  });
  return cost;
};

export const calculateTotalCost = (items, shipMethod, taxRate) => {
  console.log("calculate cost!");
  const subtotal = calculateCart(items);
  let shipping = 0;
  // The challenge designated a base shipping of $50.
  // future edits may support standard, overnight, international, etc
  switch (shipMethod) {
    case "standard":
      shipping = 50;
      break;
    default:
      shipping = 50;
      break;
  }
  const tax = subtotal * taxRate;

  const total = subtotal + shipping; // tax included in the price of the product
  return { subtotal, shipping, tax, total };
};
