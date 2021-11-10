import './Hero.scss';
import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__wrapper">
                <div className="hero__featured-product-container">
                    <h2 className="hero__feature-title">New Product</h2>
                    <h1 className="hero__featured-product-name">XX99 Mark II Headphones</h1>
                    <p className="hero__featured-product-description">
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </p>
                </div>
                <img src="" alt="" className="hero__featured-product-image" />
            </div>
        </section>
    );
};

export default Hero;