import { useState } from "react";
import "./CarouselCards.css";

import ProductCard from "../../common/ProductCard/ProductCard";

import {
  FaCircleChevronLeft,
  FaCircleChevronRight,
} from "react-icons/fa6";

import Product1 from "../../assets/Product/Product1.png";
import Product2 from "../../assets/Product/Product2.png";
import Product3 from "../../assets/Product/Product3.png";

const CarouselCards = () => {
  const cards = [
    {
      image: Product1,
      productType: "COOKIES",
      title: "Wedding Favors",
      price: "$45",
    },
    {
      image: Product2,
      productType: "COOKIES",
      title: "OG Chocolate Chip",
      price: "$18",
    },
    {
      image: Product3,
      productType: "COOKIES",
      title: "Double Chocolate Chip",
      price: "$15",
    },
    {
      image: Product1,
      productType: "COOKIES",
      title: "Sugar Cookies",
      price: "$20",
    },
    {
      image: Product2,
      productType: "COOKIES",
      title: "Red Velvet",
      price: "$22",
    },
    {
      image: Product3,
      productType: "COOKIES",
      title: "Peanut Butter",
      price: "$19",
    },
  ];

  const visibleCards = 3;
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < cards.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="container">
      <div className="carousel-content">
        <h1 className="text-primary-400 fw-bold fs-1100">
          Best Sellers
        </h1>

        <h2 className="fw-regular fs-700">
          SEE WHAT PEOPLE ARE LOVING
        </h2>

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {cards.map((item, i) => (
              <div className="carousel-item" key={i}>
                <ProductCard
                  image={item.image}
                  productType={item.productType}
                  title={item.title}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button
            className="nav-btn"
            onClick={prev}
            disabled={index === 0}
          >
            <FaCircleChevronLeft />
          </button>

          <button
            className="nav-btn"
            onClick={next}
            disabled={index >= cards.length - visibleCards}
          >
            <FaCircleChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarouselCards;