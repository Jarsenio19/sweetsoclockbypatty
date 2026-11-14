
import { useState } from 'react';
import './ShopSection.css';

import ProductCard from '../../common/ProductCard/ProductCard';

import {
  carouselCardsData,
  categories,
  flavors,
  dietaryOptions,
  basketOptions,
} from '../../data/Data';

const ShopContents = () => {

  // Search
  const [search, setSearch] = useState('');

  // Selected filters
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedFlavors, setSelectedFlavors] = useState([]);

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

  // Filter products
  const filteredProducts = carouselCardsData.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) =>
        category.toUpperCase() === product.productType.toUpperCase()
      );

    const matchesFlavor =
      selectedFlavors.length === 0 ||
      selectedFlavors.some((flavor) =>
        product.name.toLowerCase().includes(flavor.toLowerCase())
      );

    return matchesSearch && matchesCategory && matchesFlavor;
  });

  return (
    <section className="shop-contents">

      {/* SIDEBAR */}
      <aside className="shop-sidebar">

        {/* Breadcrumb */}
        <div className="shop-breadcrumb">
          <h2>
            Shop <span>/</span> <strong>All</strong>
          </h2>
        </div>

        {/* Search */}
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

      {/* PRODUCT CONTENT */}
      <div className="shop-product-content">

        <div className="shop-product-grid">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product, index) => (

              <ProductCard
                key={index}
                image={product.image}
                productType={product.productType}
                name={product.name}
                price={product.price}
              />

            ))

          ) : (

            <div className="shop-no-products">
              <h3>No products found.</h3>
              <p>Try searching for another product.</p>
            </div>

          )}

        </div>

      </div>

    </section>
  );
};

export default ShopContents;
