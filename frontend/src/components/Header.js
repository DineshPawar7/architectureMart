import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser") || "");
    setIsLoggedIn(localStorage.getItem("token") !== null);

    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setLoggedInUser("");
    setTimeout(() => navigate("/login"), 1000);
  };

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "");

  return (
    <>
      <header className="flex items-center justify-between px-5 py-3 bg-white shadow-md sticky top-0 z-[1000] font-sans">
        <div>
          <Link to="/" className="text-xl font-bold text-black no-underline">Architecture Mart</Link>
        </div>

        <div className="lg:hidden flex flex-col cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="w-[30px] h-[3px] my-[5px] bg-[#481E14] transition-all"></div>
          <div className="w-[30px] h-[3px] my-[5px] bg-[#481E14] transition-all"></div>
          <div className="w-[30px] h-[3px] my-[5px] bg-[#481E14] transition-all"></div>
        </div>

        <nav
          className={`${
            isMenuOpen ? 'left-0' : '-left-full'
          } lg:static fixed top-0 w-3/4 lg:w-auto h-screen lg:h-auto bg-white lg:bg-transparent flex flex-col lg:flex-row items-center lg:justify-center lg:gap-6 gap-4 pt-20 lg:pt-0 transition-all duration-300 z-[1001]`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 list-none p-0">
            <li><Link to="/" className="text-gray-800 font-medium hover:text-[#481E14]">Home</Link></li>
            <li><NavLink to="/category" className="text-gray-800 font-medium hover:text-[#481E14]">Category</NavLink></li>
            <li><NavLink to="/pricing" className="text-gray-800 font-medium hover:text-[#481E14]">Pricing</NavLink></li>
            <li><NavLink to="/signup" className="text-gray-800 font-medium hover:text-[#481E14]">Register</NavLink></li>

            <li className="lg:hidden flex flex-col items-center gap-4 mt-5">
              <div className="flex items-center bg-gray-200 px-3 py-1 rounded-full">
                <FaSearch className="text-gray-700 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-sm w-[100px] focus:outline-none"
                />
              </div>
              <FaHeart className="text-2xl text-gray-700 hover:text-[#481E14]" />
              <NavLink to="/cart" className="relative">
                <FaShoppingCart className="text-2xl text-gray-700 hover:text-[#481E14]" />
                <span className="absolute -top-2 -right-3 text-sm">({cartCount})</span>
              </NavLink>
            </li>

            {isLoggedIn && (
              <li
                className="relative flex flex-col items-center mt-3 lg:mt-0"
                onClick={() => setIsProfileClicked(!isProfileClicked)}
              >
                <div className="w-10 h-10 bg-[#481E14] text-white text-center leading-10 rounded-full cursor-pointer">
                  {getInitial(loggedInUser)}
                </div>
                <div className="text-sm text-gray-700">Welcome, {loggedInUser}!</div>

                {isProfileClicked && (
                  <button
                    onClick={handleLogout}
                    className="absolute top-14 right-0 bg-[#481E14] text-white px-3 py-1 rounded shadow"
                  >
                    <FaSignOutAlt className="inline mr-1" /> Log Out
                  </button>
                )}
              </li>
            )}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center border border-gray-300 px-3 py-1 rounded-full bg-white">
            <FaSearch className="text-gray-700 cursor-pointer" onClick={() => setIsSearchActive(!isSearchActive)} />
            <input
              type="text"
              placeholder="Search..."
              className={`${
                isSearchActive ? 'w-36' : 'w-0'
              } transition-all duration-300 bg-transparent text-sm focus:outline-none`}
            />
          </div>
          <FaHeart className="text-xl text-gray-700 cursor-pointer hover:text-[#481E14]" />
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-xl text-gray-700 cursor-pointer hover:text-[#481E14]" />
            <span className="absolute -top-2 -right-3 text-sm">({cartCount})</span>
          </NavLink>
        </div>
        <ToastContainer />
      </header>
    </>
  );
};

export default Header;
