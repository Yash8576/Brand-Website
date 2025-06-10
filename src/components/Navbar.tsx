// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/11zon_cropped (1).png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const menuItems = ['Home', 'Milk', 'Books', 'Manure', 'Eggs', 'Ghee', 'About', 'Cart'];

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsAnimatingOut(false);
    }, 350);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        <ul className="navbar-links">
          {menuItems
            .filter(item => item !== 'Cart')
            .map(item => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item}`}>{item}</Link>
              </li>
            ))}
        </ul>

        <div className="nav-actions">
          <Link to="/Cart" className="cart-icon" aria-label="Cart">🛒</Link>
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            &#9776;
          </div>
        </div>
      </nav>

      {(menuOpen || isAnimatingOut) && (
        <div className={`fullscreen-menu ${isAnimatingOut ? 'slide-out' : 'slide-in'}`}>
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>

          <div className="menu-content">
            <Link
              to="/Cart"
              onClick={handleClose}
              style={{
                animation: `${isAnimatingOut ? 'fadeDown' : 'fadeUp'} 0.4s ease forwards`,
                animationDelay: `0.2s`
              }}
            >
              Cart
            </Link>

            {menuItems
              .filter(item => item !== 'Cart')
              .map((item, index) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item}`}
                  onClick={handleClose}
                  style={{
                    animation: `${isAnimatingOut ? 'fadeDown' : 'fadeUp'} 0.4s ease forwards`,
                    animationDelay: `${0.25 + index * 0.05}s`
                  }}
                >
                  {item}
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;