import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL, API_CATEGORY } from '../../utils/ApiUtils';

const ProductCategoryPage = () => {
    const { categoryName } = useParams();
    // Investigate useContext for state management
    const [ products, setProducts ] = useState(null);
    
    useEffect(() => {
        /**
         * Makes an API request to get products using the category name.
         * Updates state of products.
         * @returns {undefined}
         */
        const getProducts = async () => {
            const { data } = await axios.get(`${API_BASE_URL}${API_CATEGORY}/${categoryName}`);
            setProducts(data);
        }
        getProducts();

    }, [ products, categoryName ])

    return (
        <main>
            {products && (
                <>
                    Product category page: {categoryName}
                    {products.map((product, i) => <h1 key={i}>{product.name}</h1>)}
                </>
            )}
            
        </main>
    );
};

export default ProductCategoryPage;