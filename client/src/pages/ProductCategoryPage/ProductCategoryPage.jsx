import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL, API_CATEGORY } from '../../utils/ApiUtils';
import CategoryHeader from '../../components/CategoryHeader/CategoryHeader';

const ProductCategoryPage = () => {
    const { categoryName } = useParams();
    // Investigate useContext for state management
    const [ products, setProducts ] = useState(null);
    const [ currentCategory, setCurrentCategory ] = useState(categoryName);
    /**
     * Makes an API request to get products using the category name. Updates state of products.
     * @returns {undefined}
     */
    const getProducts = async () => {
        console.log("getting products")
        const { data } = await axios.get(`${API_BASE_URL}${API_CATEGORY}/${categoryName}`);
        setProducts(data);
    };
    
    useEffect(() => {
        (!products || categoryName !== currentCategory) && getProducts();
        if(categoryName !== currentCategory) setCurrentCategory(categoryName);

    }, [ products, categoryName, currentCategory ])

    return (
        <main>
            <CategoryHeader category={categoryName} />
            {products && (
                <>
                    {products.map((product, i) => <p key={i}>{product.name}</p>)}
                </>
            )}
            
        </main>
    );
};

export default ProductCategoryPage;