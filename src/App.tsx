import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Milk from './pages/Milk';
import Books from './pages/Books';
import Manure from './pages/Manure';
import Eggs from './pages/Eggs';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Milk" element={<Milk />} />
      <Route path="/Books" element={<Books />} />
      <Route path="/Manure" element={<Manure />} />
      <Route path="/Eggs" element={<Eggs />} />
    </Routes>
  );
};

export default App;