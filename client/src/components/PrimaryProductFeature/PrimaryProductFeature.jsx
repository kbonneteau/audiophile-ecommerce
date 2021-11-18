import './PrimaryProductFeature.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryProductFeature = () => {
    return (
        <article className="primary-feature">
            <div className="primary-feature__image-container">
                <img src="http://localhost:8080/images/home/pattern-circles.svg" alt="" className="primary-feature__circles" />
                <img className="primary-feature__image"
                        src="http://localhost:8080/images/home/mobile-image-speaker-zx9.png"
                        alt="" 
                        srcSet="http://localhost:8080/images/home/tablet-image-speaker-zx9.png 768w,
                                http://localhost:8080/images/home/desktop-image-speaker-zx9.png 1080w"
                />
            </div>
            <div className="primary-feature__content-container">
                <h2 className="primary-feature__product-name">ZX9 SPEAKER</h2>
                <p className="primary-feature__copy">
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <Link className="primary-feature__product-link" to="/">See Product</Link>
            </div>
        </article>
    );
};

export default PrimaryProductFeature;