import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import "../style/Header.css";
import "../../pages/Signup";
import "../../pages/Login";
import "../../pages/HomePage";



const Header = () => {
  return (
    <>
      <header className="header">
        {/* Logo Section */}
        <div className='div-logo'>
          <Link  className='logo' to="/">Rushi- The Cad Designer</Link>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul>
            <li>
              <NavLink to="/homepage" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/category">
                Category
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing">
                Pricing
              </NavLink>
            </li>
          
            <li>
              <NavLink to="/signup">
                Register
              </NavLink>
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
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
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














// import React from "react";
// import { NavLink, Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo01"
//             aria-controls="navbarTogglerDemo01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//             <Link to="/" className="navbar-brand">
//               🛒 Ecommerce App
//             </Link>
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink to="/" className="nav-link ">
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/category" className="nav-link ">
//                   Category
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/register" className="nav-link">
//                   Register
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/login" className="nav-link">
//                   Login
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/cart" className="nav-link">
//                   Cart (0)
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
      
//     </>
//   );
// };

// export default Header;