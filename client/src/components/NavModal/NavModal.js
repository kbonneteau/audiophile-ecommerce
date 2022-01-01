import "./NavModal.scss";
import React from "react";
import ProductCategoryList from "../ProductCategoryList/ProductCategoryList";

const NavModal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <>
        <div className="navigation-modal__overlay" />
        <div className="navigation-modal">
          <ProductCategoryList onClose={onClose} />
        </div>
      </>
    )
  );
};

export default NavModal;
