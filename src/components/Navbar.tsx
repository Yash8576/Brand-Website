// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/11zon_cropped (1).png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const menuItems = ['Home', 'Milk', 'Books', 'Manure', 'Eggs', 'Ghee'];

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsAnimatingOut(false);
    }, 500); // match slideUp animation duration
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        <ul className="navbar-links">
          {menuItems.slice(1).map((item) => (
            <li key={item}><Link to={`/${item}`}>{item}</Link></li>
          ))}
        </ul>

        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          &#9776;
        </div>
      </nav>

      {(menuOpen || isAnimatingOut) && (
        <div className={`fullscreen-menu ${isAnimatingOut ? 'slide-out' : 'slide-in'}`}>
          <button className="close-button" onClick={handleClose}>&times;</button>
          <div className="menu-content">
            {menuItems.map((item, index) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item}`}
                onClick={handleClose}
                style={{
                  animation: `${isAnimatingOut ? 'fadeDown' : 'fadeUp'} 0.4s ease forwards`,
                  animationDelay: `${0.2 + index * 0.15}s`
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