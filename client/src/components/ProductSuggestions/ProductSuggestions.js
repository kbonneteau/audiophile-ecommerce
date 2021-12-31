import "./ProductSuggestions.scss";
import React from "react";
import { Link } from "react-router-dom";

const ProductSuggestions = ({ relatedProducts }) => {
  return (
    <aside className="product-suggestions">
      <h2 className="product-suggestions__title">You May Also Like</h2>
      {relatedProducts.map((product) => (
        <article
          key={product.slug}
          className="product-suggestions__suggestion-card"
        >
          {/* <div className="product-suggestions__image-container"> */}
          <picture>
            <source
              srcSet={product.image.desktop}
              media="(min-width: 1024px)"
            />
            <source srcSet={product.image.tablet} media="(min-width: 768px)" />
            <img
              className="product-suggestions__product-image"
              src={product.image.mobile}
              alt={product.name}
            />
          </picture>
          {/* </div> */}
          <h3 className="product-suggestions__product-name">{product.name}</h3>
          <Link
            className="product-suggestions__product-link"
            to={`/category/${product.slug}`}
          >
            See Product
          </Link>
        </article>
      ))}
    </aside>
  );
};

export default ProductSuggestions;
