import React, { useEffect } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductCategoryPage from "./pages/ProductCategoryPage/ProductCategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { fetchCart } from "./store/utils/thunkCreators";

const Routes = (props) => {
  console.log("State", props);
  const { fetchCart } = props;
  useEffect(() => {
    console.log("useEffect");
    const token = JSON.parse(localStorage.getItem("token"));
    fetchCart(token);
  }, [fetchCart]);

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

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: (message) => {
      dispatch(fetchCart(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
