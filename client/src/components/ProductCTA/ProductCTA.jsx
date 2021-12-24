import React, { useEffect } from "react";
import NumberFormat from "react-number-format";
import "./ProductCTA.scss";
import ProductQuantityForm from "../ProductQuantityForm/ProductQuantityForm";

const ProductCTA = ({ product }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product]);

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
        <ProductQuantityForm id={product.id} />
      </div>
    </section>
  );
};

export default ProductCTA;
