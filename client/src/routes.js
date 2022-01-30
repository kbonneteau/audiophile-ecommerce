import React from "react";
import { Routes as Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductCategoryPage from "./pages/ProductCategoryPage/ProductCategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/:categoryName" element={<ProductCategoryPage />} />
        <Route
          path="/:categoryName/:productSlug"
          element={<ProductDetailsPage />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
