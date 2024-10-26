import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import RegPage from './pages/RegPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';

function App() {
  return (
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route path="/ProductPage" element={<ProductPage />} />
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/RegPage" element={<RegPage />} />
              <Route path="/ShopPage" element={<ShopPage />} />
            
            </Routes>
            <Footer />
          </main>
        </div>
      </Router>
  );
}

export default App;

