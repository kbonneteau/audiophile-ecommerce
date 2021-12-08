import './ProductCard.scss';
import React from 'react';
import { } from 'react-router-dom';

const ProductCard = ({ product }) => {

    console.log(product.image)
    return (
        <article className="product-card">
            <img src={product.image.mobile} alt="" className="product-card__product-image" />
            {product.new 
                ? <span className="product-card__new-product">New product</span>
                : null
            }
            <h2 className="product-card__product-name">{product.name}</h2>
            <p className="product-card__description">{product.description}</p>

        </article>
    );
};

export default ProductCard;