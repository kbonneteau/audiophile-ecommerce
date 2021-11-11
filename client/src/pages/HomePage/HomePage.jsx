import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import ProductCategoryList from '../../components/ProductCategoryList/ProductCategoryList';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <ProductCategoryList />
        </main>
    );
};

export default HomePage;