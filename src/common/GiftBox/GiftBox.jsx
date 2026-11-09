import './GiftBox.css'
import { FaCircleChevronRight } from "react-icons/fa6";

const GiftBox = ({ giftCards = [] }) => {
  return (
    <div className='giftCards-box'>
      {giftCards.slice(0, 3).map((item) => (
        <div
          key={item.id}
          className={`giftCards ${item.className || ""}`}
        >
          <img
            id={item.id}
            src={item.image}
            alt={item.subtitle}
          />

          <div className="giftCards-details">
            <div className="giftCards-text">
              <h3 className="fw-bold fs-800">
                {item.title}
              </h3>

              <h2 className="fw-regular">
                {item.subtitle}
              </h2>
            </div>

            <div className='icons'>
              <FaCircleChevronRight className="arrow-icon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GiftBox