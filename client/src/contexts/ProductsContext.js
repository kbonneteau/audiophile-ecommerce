import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL, API_PRODUCTS } from "../utils/apiUtils";

const ProductsContext = createContext();
// Can I create a current category context?

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  /**
   * Makes an API request to get products using the category name. Updates state of products.
   * @returns {undefined}
   */
  const getProducts = async () => {
    console.log("getting products");
    try {
      const { data } = await axios.get(`${API_BASE_URL}${API_PRODUCTS}`);
      const sortedProducts = data.sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
      console.log("products", sortedProducts);
    } catch {
      console.log("error in fetching products");
    }
  };

  useEffect(() => getProducts(), []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
