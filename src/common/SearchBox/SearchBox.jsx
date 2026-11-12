
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./SearchBox.css";

const SearchBox = ({ isOpen, onClose }) => {
  return (
    <div className={`search-dropdown ${isOpen ? "active" : ""}`}>

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
          onClick={onClose}
          aria-label="Close search"
        >
          ×
        </button>
      </form>

    </div>
  );
};

export default SearchBox;
