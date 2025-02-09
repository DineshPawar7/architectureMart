import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import "../style/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isProfileClicked, setIsProfileClicked] = useState(false); // State to toggle logout button visibility

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const toggleSearch = () => {
    setIsSearchActive(prevState => !prevState);
  };

  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
    setIsLoggedIn(localStorage.getItem('token') !== null); // Check if the user is logged in
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    setUsername('');
    
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  // Function to get the first letter of the logged-in user's name
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
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
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/category">Category</NavLink></li>
            <li><NavLink to="/pricing">Pricing</NavLink></li>
            <li><NavLink to="/signup">Register</NavLink></li>
            {!isLoggedIn ? (
              <li>
                <NavLink to="/login">
                  <button className="login-button">Log In</button>
                </NavLink>
              </li>
            ) : (
              <li className="profile-icon-container" onClick={() => setIsProfileClicked(!isProfileClicked)}>
                <div className="profile-icon">
                  {getInitial(loggedInUser)} {/* Display first letter of username */}
                  <div className="welcome-message">
                    <p>Welcome, {loggedInUser}!</p>
                  </div>
                </div>
                {isProfileClicked && (
                  <button className="logout-button" onClick={handleLogout}>
                    <FaSignOutAlt /> Log Out
                  </button>
                )}
                
              </li>
            )}
          </ul>
        </nav>

        {/* Header Icons */}
        <div className="header-icons">
          <div className="search-bar" onClick={toggleSearch}>
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search..." className={isSearchActive ? 'active' : ''} />
          </div>
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
