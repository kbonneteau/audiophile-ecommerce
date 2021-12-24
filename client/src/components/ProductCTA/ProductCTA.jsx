import React from "react";
import "./ProductCTA.scss";

const ProductCTA = ({ product }) => {
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

        {/* Price */}
        {/* number input and incrementer/decrementer */}
        {/* add to cart button */}
      </div>
    </section>
  );
};

export default ProductCTA;
