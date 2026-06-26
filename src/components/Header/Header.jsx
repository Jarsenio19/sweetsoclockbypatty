import "./Header.css";
import { useState } from "react";

import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { LiaUserSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../assets/SweetOclockLogo.png";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-container">
      <div className="wrapper">

        {/* Banner */}
        <div className="banner">
          <p>
            FREE GROUND SHIPPING On All Orders Over $49.99 | Shop Now
          </p>
        </div>

        {/* Navigation */}
        <div className="navigation">

          {/* Hamburger LEFT */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>

          {/* Logo CENTER */}
          <div className="primary-logo">
            <img src={logo} alt="Sweet O'Clock Logo" />
          </div>

          {/* Desktop Nav */}
          <nav className="primary-nav">
            <ul className="fw-semi-bold">
              <li>Shop</li>
              <li>Cookies</li>
              <li>Bakery</li>
              <li>Gifting</li>
              <li>Our Story</li>
            </ul>
          </nav>

          {/* Icons RIGHT */}
          <div className="nav-icons">
            <IoSearchOutline className="search-icon" />
            <LiaUserSolid className="user-icon" />

            <IoCartOutline
              className="cart-icon"
              onClick={() => setCartOpen(true)}
            />
          </div>
        </div>

        {/* CART SIDEBAR */}
        <div className={`sidebar ${cartOpen ? "active" : ""}`}>
          <button
            className="close-btn"
            onClick={() => setCartOpen(false)}
          >
            ×
          </button>

          <div className="cart-content">
            <h2>Your Cart</h2>
            <p>Your cart is empty.</p>
          </div>
        </div>

        {/* MENU SIDEBAR */}
        <div className={`sidebar ${menuOpen ? "active" : ""}`}>

          {/* HEADER ROW: LOGO LEFT + X RIGHT */}
          <div className="sidebar-header">

            {/* BIG LOGO LEFT */}
            <div className="sidebar-logo-big">
              <img src={logo} alt="Logo" />
            </div>

            {/* CLOSE BUTTON RIGHT */}
            <button
              className="close-btn"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>

          </div>

          {/* MENU ITEMS */}
          <ul className="mobile-menu">
            <li>Shop</li>
            <li>Cookies</li>
            <li>Bakery</li>
            <li>Gifting</li>
            <li>Our Story</li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default Header;