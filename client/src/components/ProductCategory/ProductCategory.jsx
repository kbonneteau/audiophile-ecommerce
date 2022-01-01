import "./ProductCategory.scss";
import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/icon-arrow-right.svg";

const ProductCategory = ({ category }) => {
  return (
    <article className="product-category">
      <img
        src={category.image}
        alt={`${category.category} icon`}
        className="product-category__image"
      />
      <h2 className="product-category__title">{category.category}</h2>
      <Link
        to={`/${category.category}`}
        className="product-category__shop-button"
      >
        Shop{" "}
        <img src={arrowIcon} alt="" className="product-category__shop-arrow" />
      </Link>
    </article>
  );
};

export default ProductCategory;
