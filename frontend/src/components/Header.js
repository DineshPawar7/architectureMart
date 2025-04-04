import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import "../style/Header.css";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  // Fetch user login status and cart count
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser") || "");
    setIsLoggedIn(localStorage.getItem("token") !== null);

    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount(); // Initial cart update
    window.addEventListener("storage", updateCartCount);

    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setLoggedInUser("");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  // Get the first letter of the username
  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "");

  return (
    <>
      <header className="header">
        <div className="div-logo">
          <Link className="logo" to="/">Architecture Mart</Link>
        </div>

        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/category">Category</NavLink></li>
            <li><NavLink to="/pricing">Pricing</NavLink></li>
            <li><NavLink to="/signup">Register</NavLink></li>

            <li className="mobile-icons">
              <div className="search-bar" onClick={() => setIsSearchActive(!isSearchActive)}>
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search..." className={isSearchActive ? "active" : ""} />
              </div>
              <FaHeart className="icon heart-icon" />
              <NavLink to="/cart">
                <FaShoppingCart className="icon cart-icon" />
                <span className="cart-count">({cartCount})</span>
              </NavLink>
            </li>

            {isLoggedIn && (
              <li className="profile-icon-container" onClick={() => setIsProfileClicked(!isProfileClicked)}>
                <div className="profile-icon">
                  {getInitial(loggedInUser)}
                </div>
                <div className="welcome-message">Welcome, {loggedInUser}!</div>

                {isProfileClicked && (
                  <button className="logout-button" onClick={handleLogout}>
                    <FaSignOutAlt /> Log Out
                  </button>
                )}
              </li>
            )}
          </ul>
        </nav>

        <div className="header-icons">
          <div className="search-bar" onClick={() => setIsSearchActive(!isSearchActive)}>
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search..." className={isSearchActive ? "active" : ""} />
          </div>
          <FaHeart className="icon heart-icon" />
          <NavLink to="/cart">
            <FaShoppingCart className="icon cart-icon" />
            <span className="cart-count">({cartCount})</span>
          </NavLink>
        </div>
        <ToastContainer />
      </header>
    </>
  );
};

export default Header;
