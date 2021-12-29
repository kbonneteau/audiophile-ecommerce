import "./ProductSuggestions.scss";
import React from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { useCategory } from "../../contexts/CategoryContext";

const ProductSuggestions = () => {
  const products = useProducts();
  const category = useCategory();

  console.log(category);
  return (
    products && (
      <aside className="product-suggestions">
        <h2 className="product-suggestions__title">You May Also Like</h2>
        {/* {products.filter(product => ).map((product) => (
          <p>{product.name}</p>
        ))} */}
      </aside>
    )
  );
};

export default ProductSuggestions;
