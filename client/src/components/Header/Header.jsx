import './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import hamburgerIcon from '../../assets/icons/icon-hamburger.svg';
import cartIcon from '../../assets/icons/icon-cart.svg';
// import cartIconHover from '../../assets/icons/icon-cart-alt.svg';
import companyLogo from '../../assets/images/logo.svg'

const Header = () => {
    return (
        <header className="site-header">
            <div className="site-header__wrapper">
                <img className="site-header__menu-toggle" src={hamburgerIcon} alt="mobile hamburger icon"/>
                <Link className="site-header__logo-link" to="/">
                    <img className="site-header__logo" src={companyLogo} alt="audiophile company logo" />
                </Link>
                <nav className="site-header__main-navigation">
                    <NavLink className="site-header__link" to="/">Home</NavLink>
                    <NavLink className="site-header__link" to="/">Headphones</NavLink>
                    <NavLink className="site-header__link" to="/">Speakers</NavLink>
                    <NavLink className="site-header__link" to="/">Earphones</NavLink>
                </nav>
                <img className="site-header__cart" src={cartIcon} alt="shopping cart icon" />
            </div>
        </header>
    );
};

export default Header;