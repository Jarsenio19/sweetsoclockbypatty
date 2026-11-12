
import { GiHamburgerMenu } from "react-icons/gi";

import "./HamburgerButton.css";

const HamburgerButton = ({ onClick }) => {
  return (
    <button
      className="hamburger-button"
      onClick={onClick}
      aria-label="Open menu"
      type="button"
    >
      <GiHamburgerMenu className="hamburger-icon" />
    </button>
  );
};

export default HamburgerButton;
