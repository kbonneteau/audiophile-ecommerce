import "./ProductImages.scss";
import React from "react";

const ProductImages = ({ galleryImages, productName }) => {
  return (
    <aside className="product-images">
      {galleryImages.map((image, i) => (
        <picture key={i}>
          <source srcSet={image.desktop} media="(min-width: 1024px)" />
          <source srcSet={image.tablet} media="(min-width: 768px)" />
          <img
            className="product-images__image"
            src={image.mobile}
            alt={productName}
          />
        </picture>
      ))}
    </aside>
  );
};

export default ProductImages;
