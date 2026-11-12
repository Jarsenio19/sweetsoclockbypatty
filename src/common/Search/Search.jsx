
import { useState, useEffect, useRef } from "react";

import { IoSearchOutline } from "react-icons/io5";

import SearchBox from "../SearchBox/SearchBox";

import "./Search.css";

const Search = () => {

  const [searchOpen, setSearchOpen] = useState(false);

  const searchRef = useRef(null);


  // CLOSE SEARCH WHEN CLICKING OUTSIDE

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

    <div className="search-container" ref={searchRef}>

      {/* SEARCH ICON */}

      <button
        className="search-toggle"
        onClick={() => setSearchOpen((prev) => !prev)}
        aria-label="Toggle search"
        aria-expanded={searchOpen}
      >

        <IoSearchOutline className="search-icon" />

      </button>


      {/* SEARCH BOX */}

      <SearchBox
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

    </div>

  );

};

export default Search;
