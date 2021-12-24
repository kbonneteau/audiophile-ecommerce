import React, { useEffect } from "react";
import NumberFormat from "react-number-format";
import "./ProductCTA.scss";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const ProductCTA = ({ product }) => {
  console.log("product cta", product);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, product);
  return (
    <section className="product-cta">
      <img
        className="product-cta__image"
        src={product.image.mobile}
        alt={product.name}
      />
      <div className="product-cta__details-container">
        {product.new && (
          <span className="product-cta__new-product">New product</span>
        )}
        <h1 className="product-cta__name">{product.name}</h1>
        <p className="product-cta__description">{product.description}</p>
        <NumberFormat
          className="product-cta__price"
          value={product.price}
          prefix="$"
          displayType={"text"}
          thousandSeparator={true}
        />
        {/* number input and incrementer/decrementer */}
        <form onSubmit={(e) => e.preventDefault()}>
          <QuantitySelector />
          <button type="submit">Add to cart</button>
        </form>
        {/* add to cart button */}
      </div>
    </section>
  );
};

export default ProductCTA;
