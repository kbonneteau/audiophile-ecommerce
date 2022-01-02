import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductCategoryPage from './pages/ProductCategoryPage/ProductCategoryPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import { ProductsProvider } from './contexts/ProductsContext';
import { CategoryProvider } from './contexts/CategoryContext';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ProductsProvider>
        <CategoryProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:categoryName" element={<ProductCategoryPage />} />
            <Route path="/:categoryName/:productSlug" element={<ProductDetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </CategoryProvider>
      </ProductsProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
