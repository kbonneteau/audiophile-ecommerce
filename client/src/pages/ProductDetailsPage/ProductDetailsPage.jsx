import "./ProductDetailsPage.scss";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL, API_PRODUCTS } from "../../utils/apiUtils";
import ProductCTA from "../../components/ProductCTA/ProductCTA";
import ProductFeatures from "../../components/ProductFeatures/ProductFeatures";
import ProductInclusions from "../../components/ProductInclusions/ProductInclusions";
import ProductImages from "../../components/ProductImages/ProductImages";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";
import Wrapper from "../../components/Wrapper/Wrapper";

const ProductDetailsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [features, setFeatures] = useState([]);
  const { categoryName, productId } = useParams();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/${categoryName}`);
  };

  /**
   * Make server request to get the product details related to a specific id. Set the product in state.
   * @param {string} productId of the selected product
   * @returns {undefined}
   */
  const fetchProductDetails = async (productId) => {
    try {
      const { data } = await axios.get(
        `${API_BASE_URL}${API_PRODUCTS}/${productId}`
      );
      setSelectedProduct(data);
      console.log("returned product", data);
    } catch {
      console.log("error in getting product");
    }
  };

  useEffect(() => {
    // If no selected product, fetch product details
    !selectedProduct && fetchProductDetails(productId);

    // Split the features text at the new line break
    selectedProduct && setFeatures(selectedProduct.features.split("\n"));
  }, [selectedProduct, productId]);

  return !selectedProduct ? null : (
    <main className="product-page">
      <Wrapper>
        <div className="product-page__wrapper">
          <button className="product-page__back-button" onClick={handleClick}>
            Go Back
          </button>
        </div>
        <ProductCTA product={selectedProduct} />
        <div className="product-page__features-wrapper">
          <ProductFeatures features={features} />
          <ProductInclusions includedItems={selectedProduct.includes} />
        </div>

        {/* === Product images === */}
        <ProductImages
          galleryImages={Object.values(selectedProduct.gallery)}
          productName={selectedProduct.name}
        />

        {/* === Product Suggestions === */}
      </Wrapper>
      <SecondaryFooter />
    </main>
  );
};

export default ProductDetailsPage;
