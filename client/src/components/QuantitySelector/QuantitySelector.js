import "./QuantitySelector.scss";
import { useState } from "react";

const QuantitySelector = ({ selectedQuantity }) => {
  // If a quantity already exists, use that.
  // else, start at 1
  const [quantity, setQuantity] = useState(() => {
    return selectedQuantity ? selectedQuantity : 1;
  });

  const decrementCount = () =>
    quantity > 1 && setQuantity((prevQuantity) => prevQuantity - 1);

  const incrementCount = () =>
    quantity < 99 && setQuantity((prevQuantity) => prevQuantity + 1);

  return (
    <div className="quantity-selector">
      <button className="quantity-selector__decrement" onClick={decrementCount}>
        -
      </button>
      <input
        className="quantity-selector__quantity"
        type="number"
        name="quantity"
        id="quantity"
        min="1"
        max="99"
        value={quantity}
      />
      <button className="quantity-selector__increment" onClick={incrementCount}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
