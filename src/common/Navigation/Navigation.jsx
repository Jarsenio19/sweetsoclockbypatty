
import { useEffect, useRef, useState } from "react";

import { dropdownData, navItems } from "../../data/Data";

import "./Navigation.css";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navRef = useRef(null);

  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  // TOGGLE DROPDOWN
  const toggleDropdown = (key) => {
    setActiveDropdown((prev) =>
      prev === key ? null : key
    );
  };

  // CLOSE DROPDOWN
  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="primary-nav" ref={navRef}>
      <ul className="fw-semi-bold">

        {navItems.map((item) => {
          const isActive = activeDropdown === item.key;

          const columns =
            dropdownData[item.key]?.columns ?? [];

          return (
            <li
              className="nav-item"
              key={item.key}
              onMouseEnter={() =>
                setActiveDropdown(item.key)
              }
              onMouseLeave={closeDropdown}
            >

              {/* NAVIGATION BUTTON */}

              <button
                type="button"
                className={`nav-link ${isActive ? "active" : ""
                  }`}
                onClick={() => toggleDropdown(item.key)}
                aria-expanded={isActive}
                aria-controls={`dropdown-${item.key}`}
              >
                {item.label}
              </button>

              {/* DROPDOWN */}

              <div
                id={`dropdown-${item.key}`}
                className={`nav-dropdown ${isActive ? "show" : ""
                  }`}
              >

                {columns.map((column, index) => (
                  <div
                    className="dropdown-column"
                    key={`${item.key}-${index}`}
                  >

                    <h4>{column.title}</h4>

                    <ul>
                      {column.links.map(
                        (link, linkIndex) => (
                          <li
                            key={`${item.key}-${index}-${linkIndex}`}
                            onClick={closeDropdown}
                          >
                            {linkIndex ===
                              column.links.length - 1 ? (
                              <strong>{link}</strong>
                            ) : (
                              link
                            )}
                          </li>
                        )
                      )}
                    </ul>

                  </div>
                ))}

              </div>

            </li>
          );
        })}

      </ul>
    </nav>
  );
};

export default Navigation;
