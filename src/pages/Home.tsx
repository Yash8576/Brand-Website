// src/pages/Home.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const navigate = useNavigate();

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(e.target.value);
  };

  const handleOrderNow = () => {
    if (selectedProduct) {
      navigate(`/${selectedProduct}`);
    }
  };

  return (
    <section className="home">
      <div className="home-content">
        <h1>Venkata Rangam Industries</h1>
        <h2>Welcome to Our Family Brand</h2>
        <p>Bringing natural goodness to your doorstep.</p>

        <div className="product-dropdown">
          <label htmlFor="product-select">Explore our products:</label>
          <br />
          <select id="product-select" onChange={handleProductChange} value={selectedProduct}>
            <option value="" disabled>Select a product</option>
            <option value="Milk">Milk</option>
            <option value="Books">Books</option>
            <option value="Manure">Meadow Manure</option>
            <option value="Eggs">Eggs</option>
          </select>

          <br /><br />
          <button
            className="order-button"
            onClick={handleOrderNow}
            disabled={!selectedProduct}
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;