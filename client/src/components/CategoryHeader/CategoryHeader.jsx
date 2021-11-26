import './CategoryHeader.scss';
import React from 'react';

const CategoryHeader = ({ category }) => {
    return (
        <header className="category-heading">
            <h1 className="category-heading__title">
                {category}
            </h1>
        </header>
    );
};

export default CategoryHeader;