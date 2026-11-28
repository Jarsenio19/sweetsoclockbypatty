
import { useState } from 'react';
import './ShopSection.css';

import ProductCard from '../../common/ProductCard/ProductCard';
import ShopSidebar from './ShopSidebar';

import { carouselCardsData } from '../../data/Data';

const ShopSection = () => {

  // Search
  const [search, setSearch] = useState('');

  // Selected filters
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedFlavors, setSelectedFlavors] = useState([]);

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
      <ShopSidebar
        search={search}
        setSearch={setSearch}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedFlavors={selectedFlavors}
        setSelectedFlavors={setSelectedFlavors}
      />

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

export default ShopSection;
