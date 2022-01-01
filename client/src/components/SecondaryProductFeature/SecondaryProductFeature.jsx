import "./SecondaryProductFeature.scss";
import React from "react";
import { Link } from "react-router-dom";

const SecondaryProductFeature = () => {
  return (
    <article className="secondary-feature">
      <div className="secondary-feature__content-container">
        <h2 className="secondary-feature__product-name">ZX7 SPEAKER</h2>
        <Link
          className="secondary-feature__product-link"
          to="/speakers/zx7-speaker"
        >
          See Product
        </Link>
      </div>
    </article>
  );
};

export default SecondaryProductFeature;
