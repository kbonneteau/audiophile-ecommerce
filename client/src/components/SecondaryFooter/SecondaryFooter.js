import './SecondaryFooter.scss';
import React from 'react';
import ProductCategoryList from '../ProductCategoryList/ProductCategoryList';
import MissionStatement from '../MissionStatement/MissionStatement';

const SecondaryFooter = () => {
    return (
        <aside className="secondary-footer">
            <div className="secondary-footer__wrapper">
                <ProductCategoryList />
                <MissionStatement />
            </div>
        </aside>
    );
};

export default SecondaryFooter;