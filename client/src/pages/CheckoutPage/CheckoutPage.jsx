import "./CheckoutPage.scss";
import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import GoBack from "../../components/GoBack/GoBack";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const CheckoutPage = () => {
  return (
    <main className="checkout-page">
      <Wrapper>
        <GoBack />
        <h1 className="checkout-page__title">Checkout</h1>
        <CheckoutForm />
      </Wrapper>
    </main>
  );
};

export default CheckoutPage;
