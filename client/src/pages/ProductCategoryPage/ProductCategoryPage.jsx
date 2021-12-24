import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL, API_CATEGORY } from "../../utils/apiUtils";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import ProductCard from "../../components/ProductCard/ProductCard";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";

const ProductCategoryPage = () => {
  const { categoryName } = useParams();
  // Investigate useContext for state management
  const [products, setProducts] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(categoryName);

  /**
   * Makes an API request to get products using the category name. Updates state of products.
   * @returns {undefined}
   */
  const getProducts = async () => {
    console.log("getting products");
    try {
      const { data } = await axios.get(
        `${API_BASE_URL}${API_CATEGORY}/${categoryName}`
      );
      const sortedProducts = data.sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
      console.log("products", sortedProducts);
    } catch {
      console.log("error in fetching products");
    }
  };

  useEffect(() => {
    document.title = `Audiophile | ${categoryName}`;
    window.scrollTo(0, 0);
    // Checks if products exist or if the current category is different from the categoryName
    (!products || categoryName !== currentCategory) && getProducts();
    if (categoryName !== currentCategory) setCurrentCategory(categoryName);
  }, [products, categoryName, currentCategory, getProducts]);

  return (
    <main>
      <CategoryHeader category={categoryName} />
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoryName={categoryName}
          />
        ))}
      <SecondaryFooter />
    </main>
  );
};

export default ProductCategoryPage;
