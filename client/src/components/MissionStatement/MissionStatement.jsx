import './MissionStatement.scss';
import React from 'react';

const MissionStatement = () => {
    return (
        <section className="mission-statement">
            <div className="mission-statement__wrapper">
                <div className="mission-statement__image"></div>
                <div className="mission-statement__content-container">
                    <h3 className="mission-statement__title">
                        Bringing you the <span className="mission-statement__title--emphasis">best</span> audio gear
                    </h3>
                    <p className="mission-statement__description">
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MissionStatement;