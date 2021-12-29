import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";
import { useCategoryUpdate } from "../../contexts/CategoryContext";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import ProductCard from "../../components/ProductCard/ProductCard";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";

const ProductCategoryPage = () => {
  const { categoryName } = useParams();
  const products = useProducts();
  const updateCategory = useCategoryUpdate();

  useEffect(() => {
    updateCategory(categoryName);
  }, [categoryName, updateCategory]);

  document.title = `Audiophile | ${categoryName}`;
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main>
      <CategoryHeader category={categoryName} />
      {products &&
        products
          .filter((product) => product.category === categoryName)
          .map((product) => (
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
