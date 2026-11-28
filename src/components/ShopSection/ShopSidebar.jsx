
import { useState } from 'react';
import './ShopSidebar.css';

import {
  categories,
  flavors,
  dietaryOptions,
  basketOptions,
} from '../../data/Data';

const ShopSidebar = ({
  search,
  setSearch,
  selectedCategories,
  setSelectedCategories,
  selectedFlavors,
  setSelectedFlavors,
}) => {

  // Sidebar accordion
  const [openFilters, setOpenFilters] = useState({
    productLine: true,
    flavor: false,
    dietary: false,
    basket: false,
  });

  // Toggle filter section
  const toggleFilter = (filter) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  // Toggle category
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  // Toggle flavor
  const toggleFlavor = (flavor) => {
    setSelectedFlavors((prev) =>
      prev.includes(flavor)
        ? prev.filter((item) => item !== flavor)
        : [...prev, flavor]
    );
  };

  return (
    <aside className="shop-sidebar">

      {/* BREADCRUMB */}
      <div className="shop-breadcrumb">
        <h2>
          Shop <span>/</span> <strong>All</strong>
        </h2>
      </div>

      {/* SEARCH */}
      <div className="shop-search-box">

        <input
          type="text"
          placeholder="SEARCH"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="button" aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
        </button>

      </div>

      {/* PRODUCT LINE */}
      <div className="shop-filter-group">

        <button
          className="shop-filter-title"
          onClick={() => toggleFilter('productLine')}
          aria-expanded={openFilters.productLine}
        >
          PRODUCT LINE

          <span>
            {openFilters.productLine ? '▼' : '▶'}
          </span>
        </button>

        {openFilters.productLine && (
          <div className="shop-filter-options">

            {categories.map((category) => (
              <label key={category}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />

                {category}
              </label>
            ))}

          </div>
        )}

      </div>

      {/* FLAVOR */}
      <div className="shop-filter-group">

        <button
          className="shop-filter-title"
          onClick={() => toggleFilter('flavor')}
          aria-expanded={openFilters.flavor}
        >
          FLAVOR

          <span>
            {openFilters.flavor ? '▼' : '▶'}
          </span>
        </button>

        {openFilters.flavor && (
          <div className="shop-filter-options">

            {flavors.map((flavor) => (
              <label key={flavor}>
                <input
                  type="checkbox"
                  checked={selectedFlavors.includes(flavor)}
                  onChange={() => toggleFlavor(flavor)}
                />

                {flavor}
              </label>
            ))}

          </div>
        )}

      </div>

      {/* DIETARY CONSIDERATION */}
      <div className="shop-filter-group">

        <button
          className="shop-filter-title"
          onClick={() => toggleFilter('dietary')}
          aria-expanded={openFilters.dietary}
        >
          DIETARY CONSIDERATION

          <span>
            {openFilters.dietary ? '▼' : '▶'}
          </span>
        </button>

        {openFilters.dietary && (
          <div className="shop-filter-options">

            {dietaryOptions.map((option) => (
              <label key={option}>
                <input type="checkbox" />
                {option}
              </label>
            ))}

          </div>
        )}

      </div>

      {/* BASKET CONTENTS */}
      <div className="shop-filter-group">

        <button
          className="shop-filter-title"
          onClick={() => toggleFilter('basket')}
          aria-expanded={openFilters.basket}
        >
          BASKET CONTENTS

          <span>
            {openFilters.basket ? '▼' : '▶'}
          </span>
        </button>

        {openFilters.basket && (
          <div className="shop-filter-options">

            {basketOptions.map((option) => (
              <label key={option}>
                <input type="checkbox" />
                {option}
              </label>
            ))}

          </div>
        )}

      </div>

    </aside>
  );
};

export default ShopSidebar;
