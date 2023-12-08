import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file
import CatalogPage from './pages/CatalogPage';
import BookDetailsPage from './pages/BookDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';
import ShoppingCart from './components/ShoppingCart';

const App = () => {

  return (
    <Router>
      <header>
        <h1>Online Bookstore</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/ShoppingCart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
          
        </nav>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/book/:bookId" element={<BookDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
