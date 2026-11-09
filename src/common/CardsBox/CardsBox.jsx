import "./CardsBox.css";
import { FaCircleChevronRight } from "react-icons/fa6";

const CardsBox = ({ cards = [] }) => {
  return (
    <div className="cards-box">
      {cards.slice(0, 2).map((item) => (
        <div
          key={item.title}
          className={`card ${item.className || ""}`}
        >
          <img src={item.image} alt={item.subtitle} />

          <div className="card-details">
            <div className="card-text">
              <h3 className="fw-bold fs-800">
                {item.title}
              </h3>

              <h2 className="fw-regular">
                {item.subtitle}
              </h2>
            </div>

            <div className="icons">
              <FaCircleChevronRight className="arrow-icon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsBox;