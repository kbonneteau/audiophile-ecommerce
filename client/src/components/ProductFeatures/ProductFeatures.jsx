import './ProductFeatures.scss';
import React from 'react';
import PrimaryProductFeature from '../PrimaryProductFeature/PrimaryProductFeature';
import SecondaryProductFeature from '../SecondaryProductFeature/SecondaryProductFeature';
import TertiaryProductFeature from '../TertiaryProductFeature/TertiaryProductFeature';

const ProductFeatures = () => {
    return (
        <section className="product-features">
            Product Features
            <PrimaryProductFeature />
            <SecondaryProductFeature />
            <TertiaryProductFeature />
        </section>
    );
};

export default ProductFeatures;