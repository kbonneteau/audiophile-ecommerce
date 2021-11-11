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
                {/* <img className="hero__featured-product-image"
                    srcset="http://localhost:8080/images/home/mobile-image-header.jpg 750w,
                            http://localhost:8080/images/home/tablet-image-header.jpg 1536w,
                            http://localhost:8080/images/home/desktop-image-hero.jpg 1440w"
                    sizes="(max-width: 767px) 320px,
                           (max-width: 1079px) 1080px,
                           1080px"
                    src="http://localhost:8080/images/home/desktop-image-hero.jpg"
                    alt="" /> */}

                {/* <img src="" alt="" className="hero__featured-product-image" /> */}
            </div>
        </section>
    );
};

export default Hero;