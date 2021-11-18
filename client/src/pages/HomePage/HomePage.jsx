import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import ProductCategoryList from '../../components/ProductCategoryList/ProductCategoryList';
import ProductFeatures from '../../components/ProductFeatures/ProductFeatures';
import FooterBanner from '../../components/FooterBanner/FooterBanner';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <ProductCategoryList />
            <ProductFeatures />
            <FooterBanner />
        </main>
    );
};

export default HomePage;