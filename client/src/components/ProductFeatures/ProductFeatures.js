import "./ProductFeatures.scss";

const ProductFeatures = ({ features }) => {
  return (
    <section className="product-features">
      <h2 className="product-feature__title">Features</h2>
      <p className="product-features__details">{features[0]}</p>
      <p className="product-features__details">{features[2]}</p>
    </section>
  );
};

export default ProductFeatures;
