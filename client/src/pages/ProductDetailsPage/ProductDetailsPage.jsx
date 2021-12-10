import './ProductDetailsPage.scss';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL, API_PRODUCTS } from '../../utils/apiUtils';
import AddToCart from '../../components/AddToCart/AddToCart';
import SecondaryFooter from '../../components/SecondaryFooter/SecondaryFooter';

const ProductDetailsPage = () => {
    const [ selectedProduct, setSelectedProduct ] = useState(null);
    const { categoryName, productId } = useParams();
    const navigate = useNavigate();
    
    const handleClick = e => {
        e.preventDefault();
        navigate(`/${categoryName}`);
    };

    /**
     * Make server request to get the product details related to a specific id. Set the product in state.
     * @param {string} productId of the selected product
     * @returns {undefined}
     */
    const fetchProductDetails = async productId => {
        try {
            const { data } = await axios.get(`${API_BASE_URL}${API_PRODUCTS}/${productId}`);
            setSelectedProduct(data);
            console.log("returned product", data)
        } catch {
            console.log("error in getting product");
        }
    }

    useEffect(() => {
        // If no selected product, fetch product details
        !selectedProduct && fetchProductDetails(productId);
    }, [selectedProduct, productId] )

    return (
        !selectedProduct ? null : (
            <main className="product-page">
                <button className="product-page__back-button" onClick={handleClick}>
                    go back
                </button>
                <AddToCart product={selectedProduct}/>

                {/* === Product Features === */}

                {/* === Product In The Box === */}

                {/* === Product Suggestions === */}
                <SecondaryFooter />
            </main>
        )
    );
};

export default ProductDetailsPage;