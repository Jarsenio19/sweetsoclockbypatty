import "./CollectionCards.css";
import { FaCircleChevronRight } from "react-icons/fa6";

import Design1 from "../../assets/Card/Design1.png";
import Design2 from "../../assets/Card/Design2.png";
import Design3 from "../../assets/Card/Design3.png";
import Design4 from "../../assets/Card/Design4.png";
import Design5 from "../../assets/Card/Design5.png";

const cards = [
  {
    image: Design1,
    title: "TASTE WHERE IT ALL STARTED",
    subtitle: "Our Signature Cookies",
    className: "cards-1",
  },
  {
    image: Design2,
    title: "Limited Edition",
    subtitle: "SEASONAL MUST-HAVES",
  },
  {
    image: Design3,
    title: "Premium Baskets",
    subtitle: "GIVE THE GIFT OF SWEETS",
  },
  {
    image: Design4,
    title: "Bakery",
    subtitle: "EXPLORE OUR BAKERY",
  },
  {
    image: Design5,
    title: "Sweet O'clock Market",
    subtitle: "BRANDED MERCH",
  },
]

const CollectionCards = () => {
  return (
    <section className="container">
      <div className="cards-content">
        <h1 className="text-primary-400 fs-1100">
          Explore Sweets O'clock by Patty
        </h1>

        <div className="cards-box">
          {cards.map((item, index) => (
            <div
              key={index}
              className={`card ${item.className || ""}`}
            >
              <img src={item.image} alt={item.subtitle} />

              <div className="card-details">
                <div className="card-text">
                  <h3 className="fw-bold fs-800">{item.title}</h3>
                  <h2 className="fw-regular">{item.subtitle}</h2>
                </div>

                <div className="icons">
                  <FaCircleChevronRight className="arrow-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionCards;