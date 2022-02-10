import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.scss";
import hamburgerIcon from "../../assets/icons/icon-hamburger.svg";
import cartIcon from "../../assets/icons/icon-cart.svg";
import companyLogo from "../../assets/images/logo.svg";
import NavModal from "../NavModal/NavModal";
import CartModal from "../CartModal/CartModal";

const Header = ({ cart }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleNavToggle = () => setNavOpen((prevState) => !prevState);
  const handleCartToggle = () => setCartOpen((prevState) => !prevState);

  return (
    <>
      <header className="site-header">
        <div className="site-header__wrapper">
          <img
            className="site-header__menu-toggle"
            src={hamburgerIcon}
            alt="mobile hamburger icon"
            onClick={handleNavToggle}
          />
          <Link className="site-header__logo-link" to="/">
            <img
              className="site-header__logo"
              src={companyLogo}
              alt="audiophile company logo"
            />
          </Link>
          <nav className="site-header__main-navigation">
            <NavLink className="site-header__link" to="/">
              Home
            </NavLink>
            <NavLink className="site-header__link" to="/headphones">
              Headphones
            </NavLink>
            <NavLink className="site-header__link" to="/speakers">
              Speakers
            </NavLink>
            <NavLink className="site-header__link" to="/earphones">
              Earphones
            </NavLink>
          </nav>
          <img
            className="site-header__cart"
            src={cartIcon}
            alt="shopping cart icon"
            onClick={handleCartToggle}
          />
        </div>
      </header>
      <NavModal isOpen={navOpen} onClose={() => setNavOpen(false)} />
      <CartModal
        isOpen={cartOpen}
        cart={cart[0]}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Header);
