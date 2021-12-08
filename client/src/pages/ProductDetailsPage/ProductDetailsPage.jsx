import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
    const { categoryName, productId } = useParams();
    return (
        <main>
            <h1>Product details page</h1>
            <p>Category: {categoryName}</p>
            <p>ID: {productId}</p>
        </main>
    );
};

export default ProductDetailsPage;