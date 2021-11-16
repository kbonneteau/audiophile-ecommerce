import './FooterBanner.scss';
import React from 'react';

const FooterBanner = () => {
    return (
        <section className="footer-banner">
            <div className="footer-banner__wrapper">
                <div className="footer-banner__image"></div>
                <h3 className="footer-banner__title">
                    Bringing you the <span className="footer-banner__title--emphasis">best</span> audio gear
                </h3>
                <p className="footer-banner__description">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        </section>
    );
};

export default FooterBanner;