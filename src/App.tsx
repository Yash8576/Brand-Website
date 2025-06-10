import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Milk from './pages/Milk';
import Books from './pages/Books';
import Manure from './pages/Manure';
import Eggs from './pages/Eggs';
import Ghee from './pages/ghee';
import About from './pages/About';
import Cart from './pages/Cart';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Milk" element={<Milk />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Manure" element={<Manure />} />
        <Route path="/Eggs" element={<Eggs />} />
        <Route path="/Ghee" element={<Ghee />} />
        <Route path="About" element={<About />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;