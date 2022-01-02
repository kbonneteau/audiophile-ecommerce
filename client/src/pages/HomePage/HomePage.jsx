import "./HomePage.scss";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import ProductCategoryList from "../../components/ProductCategoryList/ProductCategoryList";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import MissionStatement from "../../components/MissionStatement/MissionStatement";

import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    document.title = `Audiophile`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Link to="/checkout">Test Checkout</Link>
      <Hero />
      <ProductCategoryList />
      <FeaturedProducts />
      <MissionStatement />
    </main>
  );
};

export default HomePage;
