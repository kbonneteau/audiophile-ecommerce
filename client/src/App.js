import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductCategoryPage from './pages/ProductCategoryPage/ProductCategoryPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:categoryName" element={<ProductCategoryPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
