import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();
const CategoryUpdateContext = createContext();

export const useCategory = () => {
  return useContext(CategoryContext);
};

export const useCategoryUpdate = () => {
  return useContext(CategoryUpdateContext);
};

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("");

  const handleCategoryUpdate = (categoryName) => setCategory(categoryName);

  return (
    <CategoryContext.Provider value={category}>
      <CategoryUpdateContext.Provider value={handleCategoryUpdate}>
        {children}
      </CategoryUpdateContext.Provider>
    </CategoryContext.Provider>
  );
};
