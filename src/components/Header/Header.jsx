
import "./Header.css";
import { useState, useEffect, useRef } from "react";

import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { LiaUserSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../assets/SweetOclockLogo.png";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Reference for detecting outside clicks
  const searchRef = useRef(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-container">
      <div className="wrapper">

        {/* PROMO BANNER */}
        <div className="banner">
          <p>
            FREE GROUND SHIPPING On All Orders Over $49.99 | Shop Now
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="navigation">

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>

          <div className="primary-logo">
            <img src={logo} alt="Sweet O'Clock Logo" />
          </div>

          <nav className="primary-nav">
            <ul className="fw-semi-bold">
              <li>Shop</li>
              <li>Cookies</li>
              <li>Bakery</li>
              <li>Gifting</li>
              <li>Our Story</li>
            </ul>
          </nav>

          <div className="nav-icons">

            {/* SEARCH ICON AND DROPDOWN */}
            <div className="search-container" ref={searchRef}>

              <IoSearchOutline
                className="search-icon"
                onClick={() => setSearchOpen(!searchOpen)}
              />

              <div
                className={`search-dropdown ${searchOpen ? "active" : ""
                  }`}
              >
                <form
                  className="search-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <IoSearchOutline className="search-form-icon" />

                  <input
                    type="text"
                    placeholder="Search Here"
                    aria-label="Search products"
                  />

                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                  >
                    ×
                  </button>
                </form>
              </div>

            </div>

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

        {/* MOBILE MENU */}
        <div className={`sidebar ${menuOpen ? "active" : ""}`}>

          <div className="sidebar-header">

            <div className="sidebar-logo-big">
              <img src={logo} alt="Logo" />
            </div>

            <button
              className="close-btn"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>

          </div>

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
