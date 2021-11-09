import './Header.scss';
import { NavLink } from 'react-router-dom';
import hamburgerIcon from '../../assets/icons/icon-hamburger.svg';
import cartIcon from '../../assets/icons/icon-cart.svg';
import companyLogo from '../../assets/images/logo.svg'

const Header = () => {
    return (
        <header className="site-header">
            <img className="site-header__menu-toggle" src={hamburgerIcon} alt="mobile hamburger icon"/>
            <img className="site-header__logo" src={companyLogo} alt="audiophile company logo" />
            <nav className="site-header__main-navigation">
                <NavLink className="site-header__link" to="/">Home</NavLink>
                <NavLink className="site-header__link" to="/">Headphones</NavLink>
                <NavLink className="site-header__link" to="/">Speakers</NavLink>
                <NavLink className="site-header__link" to="/">Earphones</NavLink>
            </nav>
            <img className="site-header__cart" src={cartIcon} alt="shopping cart icon" />
        </header>
    );
};

export default Header;