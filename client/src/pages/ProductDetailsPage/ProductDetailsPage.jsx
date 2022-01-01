import "./ProductDetailsPage.scss";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL, API_PRODUCTS } from "../../utils/apiUtils";
import GoBack from "../../components/GoBack/GoBack";
import ProductCTA from "../../components/ProductCTA/ProductCTA";
import ProductFeatures from "../../components/ProductFeatures/ProductFeatures";
import ProductInclusions from "../../components/ProductInclusions/ProductInclusions";
import ProductImages from "../../components/ProductImages/ProductImages";
import ProductSuggestions from "../../components/ProductSuggestions/ProductSuggestions";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";
import Wrapper from "../../components/Wrapper/Wrapper";

const ProductDetailsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { productSlug } = useParams();
  const slugRef = useRef(productSlug);

  /**
   * Make server request to get the product details related to a specific id. Set the product in state.
   * @param {string} productSlug of the selected product
   * @returns {undefined}
   */
  const fetchProductDetails = async (productSlug) => {
    try {
      const { data } = await axios.get(
        `${API_BASE_URL}${API_PRODUCTS}/${productSlug}`
      );
      setSelectedProduct(data);
      console.log("returned product", data);
    } catch {
      console.log("error in getting product");
    }
  };

  useEffect(() => {
    // If no selected product, fetch product details
    !selectedProduct && fetchProductDetails(productSlug);
    // Check if the slug updates. If updated, pull new data
    if (slugRef.current !== productSlug) {
      slugRef.current = productSlug;
      fetchProductDetails(slugRef.current);
    }
  }, [selectedProduct, productSlug]);

  return !selectedProduct ? null : (
    <main className="product-page">
      <Wrapper>
        <GoBack />
        <ProductCTA product={selectedProduct} />
        <div className="product-page__features-wrapper">
          <ProductFeatures features={selectedProduct.features.split("\n")} />
          <ProductInclusions includedItems={selectedProduct.includes} />
        </div>
        <ProductImages
          galleryImages={Object.values(selectedProduct.gallery)}
          productName={selectedProduct.name}
        />
        <ProductSuggestions relatedProducts={selectedProduct.others} />
      </Wrapper>
      <SecondaryFooter />
    </main>
  );
};

export default ProductDetailsPage;
