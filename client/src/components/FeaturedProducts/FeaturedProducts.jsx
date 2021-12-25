import "./FeaturedProducts.scss";
import React from "react";
import PrimaryProductFeature from "../PrimaryProductFeature/PrimaryProductFeature";
import SecondaryProductFeature from "../SecondaryProductFeature/SecondaryProductFeature";
import TertiaryProductFeature from "../TertiaryProductFeature/TertiaryProductFeature";

const FeaturedProducts = () => {
  return (
    <section className="product-features">
      <div className="product-features__wrapper">
        <PrimaryProductFeature />
        <SecondaryProductFeature />
        <TertiaryProductFeature />
      </div>
    </section>
  );
};

export default FeaturedProducts;
