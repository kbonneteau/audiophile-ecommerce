import './App.scss';
import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductCategoryPage from './pages/ProductCategoryPage/ProductCategoryPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:categoryName" element={<ProductCategoryPage />} />
          <Route path="/:categoryName/:productId" element={<ProductDetailsPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
