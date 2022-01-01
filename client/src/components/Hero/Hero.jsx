import "./Hero.scss";
import React, { useState, useEffect } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";
import { HERO_PRODUCT } from "../../utils/featuredProductUtils";

const Hero = () => {
  const products = useProducts();
  const [heroProduct, setHeroProduct] = useState(null);

  useEffect(() => {
    products &&
      setHeroProduct(products.find((product) => product.slug === HERO_PRODUCT));
  }, [products]);

  return (
    heroProduct && (
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__featured-product-container">
            <h2 className="hero__feature-title">New Product</h2>
            <h1 className="hero__featured-product-name">
              XX99 Mark II Headphones
            </h1>
            <p className="hero__featured-product-description">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              className="hero__product-link"
              to={`/${heroProduct.category}/${heroProduct.slug}`}
            >
              See Product
            </Link>
          </div>
        </div>
      </section>
    )
  );
};

export default Hero;
