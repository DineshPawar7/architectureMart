import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import "../style/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const toggleSearch = () => {
    setIsSearchActive(prevState => !prevState);
  };

  return (
    <>
      <header className="header">
        {/* Logo Section */}
        <div className='div-logo'>
          <Link className='logo' to="/">Architecture Mart</Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/category">Category</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <button className="login-button">Log In</button>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Header Icons */}
        <div className="header-icons">
          {/* Search Icon */}
          <div className="search-bar" onClick={toggleSearch}>
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search..." className={isSearchActive ? 'active' : ''} />
          </div>

          {/* Cart and Heart Icons */}
          <FaHeart className="icon heart-icon" />
          <NavLink to="/cart">
            <FaShoppingCart className="icon cart-icon" />
            <span className="cart-count">(0)</span>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
