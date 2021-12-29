import "./ProductInclusions.scss";

const ProductInclusions = ({ includedItems }) => {
  return (
    <section className="product-inclusions">
      <h2 className="product-inclusions__title">In the Box</h2>
      <ul className="product-inclusions__packing-list">
        {includedItems.map((item, i) => (
          <li key={i} className="product-inclusions__list-item">
            <span className="product-inclusions__quantity">
              {item.quantity}x
            </span>
            {item.item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductInclusions;
