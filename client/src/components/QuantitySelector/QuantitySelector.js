import "./QuantitySelector.scss";

const QuantitySelector = ({ quantity, setQuantity, location }) => {
  const decrementCount = () => {
    if (location === "cart") {
      return quantity > 0 && setQuantity((prevQuantity) => prevQuantity - 1);
    }
    return quantity > 1 && setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const incrementCount = () =>
    quantity < 99 && setQuantity((prevQuantity) => prevQuantity + 1);

  return (
    quantity && (
      <div className="quantity-selector">
        <button
          className="quantity-selector__decrement"
          type="button"
          onClick={decrementCount}
        >
          -
        </button>
        <input
          className="quantity-selector__quantity"
          type="number"
          name="quantity"
          id="quantity"
          min="1"
          max="99"
          onChange={() => null}
          value={quantity}
        />
        <button
          className="quantity-selector__increment"
          type="button"
          onClick={incrementCount}
        >
          +
        </button>
      </div>
    )
  );
};

export default QuantitySelector;
