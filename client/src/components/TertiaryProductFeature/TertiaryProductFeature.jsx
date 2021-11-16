import './TertiaryProductFeature.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const TertiaryProductFeature = () => {
    return (
        <section className="tertiary-feature">
            <div className="tertiary-feature__product-image"></div>
            <div className="tertiary-feature__product-details">
                <h2 className="tertiary-feature__product-name">YX1 EARPHONES</h2>
                <Link className="tertiary-feature__product-link" to="/">See Product</Link>
            </div>
        </section>
    );
};

export default TertiaryProductFeature;