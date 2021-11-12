import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import ProductCategoryList from '../../components/ProductCategoryList/ProductCategoryList';
import ProductFeatures from '../../components/ProductFeatures/ProductFeatures';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <ProductCategoryList />
            <ProductFeatures />
        </main>
    );
};

export default HomePage;