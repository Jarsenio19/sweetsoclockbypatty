
import { logoData } from "../../data/Data";

import "./MobileMenu.css";

const MobileMenu = ({ isOpen, onClose, navItems }) => {
  return (
    <div
      className={`mobile-sidebar ${isOpen ? "active" : ""}`}
      aria-hidden={!isOpen}
    >

      {/* SIDEBAR HEADER */}

      <div className="sidebar-header">

        <div className="sidebar-logo-big">
          <img
            src={logoData.image}
            alt={logoData.alt}
          />
        </div>

        {/* CLOSE BUTTON */}

        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>

      </div>

      {/* MOBILE MENU */}

      <ul className="mobile-menu">

        {navItems.map((item) => (
          <li
            key={item.key}
            onClick={onClose}
          >
            {item.label}
          </li>
        ))}

      </ul>

    </div>
  );
};

export default MobileMenu;
