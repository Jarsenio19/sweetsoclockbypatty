
import "./Header.css";
import { useState, useEffect, useRef } from "react";

import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { LiaUserSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../assets/SweetOclockLogo.png";
import { dropdownData, navItems } from "../../data/Data";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const searchRef = useRef(null);
  const navRef = useRef(null);

  // CLOSE SEARCH AND DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
      }

      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  // TOGGLE DROPDOWN
  const toggleDropdown = (key) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

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

          {/* MOBILE MENU BUTTON */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>

          {/* LOGO */}
          <div className="primary-logo">
            <img src={logo} alt="Sweet O'Clock Logo" />
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="primary-nav" ref={navRef}>
            <ul className="fw-semi-bold">

              {navItems.map((item) => (
                <li
                  className="nav-item"
                  key={item.key}
                  onMouseEnter={() => setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >

                  <button
                    className={`nav-link ${activeDropdown === item.key ? "active" : ""
                      }`}
                    onClick={() => toggleDropdown(item.key)}
                    aria-expanded={activeDropdown === item.key}
                  >
                    {item.label}
                  </button>

                  {/* DROPDOWN */}
                  <div
                    className={`nav-dropdown ${activeDropdown === item.key ? "show" : ""
                      }`}
                  >

                    {dropdownData[item.key].columns.map((column, index) => (
                      <div className="dropdown-column" key={index}>

                        <h4>{column.title}</h4>

                        <ul>
                          {column.links.map((link, linkIndex) => (
                            <li
                              key={linkIndex}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {linkIndex === column.links.length - 1 ? (
                                <strong>{link}</strong>
                              ) : (
                                link
                              )}
                            </li>
                          ))}
                        </ul>

                      </div>
                    ))}

                  </div>

                </li>
              ))}

            </ul>
          </nav>

          {/* NAV ICONS */}
          <div className="nav-icons">

            {/* SEARCH */}
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

            {/* USER */}
            <LiaUserSolid className="user-icon" />

            {/* CART */}
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
            {navItems.map((item) => (
              <li key={item.key} onClick={() => setMenuOpen(false)}>
                {item.label}
              </li>
            ))}
          </ul>

        </div>

      </div>

    </div>
  );
};

export default Header;
