import './Footer.scss';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import companyLogo from '../../assets/images/logo.svg';
import facebookIcon from '../../assets/icons/icon-facebook.svg';
import twitterIcon from '../../assets/icons/icon-twitter.svg';
import instagramIcon from '../../assets/icons/icon-instagram.svg';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer__wrapper">
                <Link className="site-footer__logo-link" to="/">
                    <img className="site-footer__logo" src={companyLogo} alt="audiophile company logo" />
                </Link>
                <nav className="site-footer__site-map">
                    <NavLink className="site-footer__link" to="/">Home</NavLink>
                    <NavLink className="site-footer__link" to="/headphones">Headphones</NavLink>
                    <NavLink className="site-footer__link" to="/speakers">Speakers</NavLink>
                    <NavLink className="site-footer__link" to="/earphones">Earphones</NavLink>
                </nav>
                <p className="site-footer__about">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
                <p className="site-footer__copyright">
                    Copyright 2021. All Rights Reserved
                </p>
                <div className="site-footer__social-container">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="site-footer__social-link">
                        <img src={facebookIcon} alt="facebook logo" className="site-footer__social-icon" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="site-footer__social-link">
                        <img src={twitterIcon} alt="twitter logo" className="site-footer__social-icon" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="site-footer__social-link">
                        <img src={instagramIcon} alt="instagram logo" className="site-footer__social-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;