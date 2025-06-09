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
      </div>
    </section>
  );
};

export default Home;