import './ProductCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, categoryName }) => {
    return (
        <article className="product-card">
            <img src={product.image.mobile} alt="" className="product-card__product-image" />
            {product.new 
                ? <span className="product-card__new-product">New product</span>
                : null
            }
            <h2 className="product-card__product-name">{product.name}</h2>
            <p className="product-card__description">{product.description}</p>
            <Link className="product-card__product-link" to={`/${categoryName}/${product.id}`}>See Product</Link>
        </article>
    );
};

export default ProductCard;