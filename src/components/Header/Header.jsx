
import "./Header.css";

import { useState } from "react";

import { LiaUserSolid } from "react-icons/lia";

import { navItems } from "../../data/Data";

import Banner from "../../common/Banner/Banner";
import Logo from "../../common/Logo/Logo";
import Search from "../../common/Search/Search";
import Cart from "../../common/Cart/Cart";
import Navigation from "../../common/Navigation/Navigation";
import MobileMenu from "../../common/MobileMenu/MobileMenu";
import HamburgerButton from "../../common/HamburgerButton/HamburgerButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-container">

      <div className="wrapper">

        <Banner />

        <div className="navigation">

          {/* MOBILE MENU BUTTON */}

          <HamburgerButton
            onClick={() => setMenuOpen(true)}
          />

          {/* LOGO */}

          <Logo />

          {/* DESKTOP NAVIGATION */}

          <Navigation />

          {/* NAVIGATION ICONS */}

          <div className="nav-icons">

            <Search />

            <LiaUserSolid className="user-icon" />

            <Cart />

          </div>

        </div>

        {/* MOBILE MENU */}

        <MobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          navItems={navItems}
        />

      </div>

    </div>
  );
};

export default Header;
