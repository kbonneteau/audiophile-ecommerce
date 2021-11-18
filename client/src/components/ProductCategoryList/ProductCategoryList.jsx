import './ProductCategoryList.scss';
import React from 'react';
import ProductCategory from '../ProductCategory/ProductCategory';

const ProductCategoryList = () => {
    const productCategories = [
        {
            category: "headphones",
            image: "http://localhost:8080/images/products/categories/image-category-thumbnail-headphones.png"
        },
        {
            category: "speakers",
            image: "http://localhost:8080/images/products/categories/image-category-thumbnail-speakers.png"
        },
        {
            category: "earphones",
            image: "http://localhost:8080/images/products/categories/image-category-thumbnail-earphones.png"
        },
    ]

    return (
        <section className="product-categories">
            <div className="product-categories__wrapper">
                {productCategories.map((category, i) => (
                    <ProductCategory key={i} category={category} />
                ))}
            </div>
        </section>
    );
};

export default ProductCategoryList;