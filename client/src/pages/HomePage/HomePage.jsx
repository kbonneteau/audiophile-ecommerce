import './HomePage.scss';
import { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import ProductCategoryList from '../../components/ProductCategoryList/ProductCategoryList';
import ProductFeatures from '../../components/ProductFeatures/ProductFeatures';
import MissionStatement from '../../components/MissionStatement/MissionStatement';

const HomePage = () => {
    useEffect(() => {
        document.title = `Audiophile`;
    }, [])

    return (
        <main>
            <Hero />
            <ProductCategoryList />
            <ProductFeatures />
            <MissionStatement />
        </main>
    );
};

export default HomePage;