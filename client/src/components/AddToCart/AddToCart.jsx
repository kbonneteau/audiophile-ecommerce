import React from 'react';
import './AddToCart.scss';

const AddToCart = ({ product }) => {
    return (
        <section className="add-to-cart">
            <img src={product.image.mobile} alt={product.name} />
            {product.new 
                && <span className="add-to-cart__new-product">New product</span>
            }
            <h1 className="add-to-cart__product-name">
                {product.name}
            </h1>
            <p className="add-to-cart__description">
                {product.description}
            </p>
            
            {/* Price */}
            {/* number input and incrementer/decrementer */}
            {/* add to cart button */}

        </section>
    );
};

export default AddToCart;