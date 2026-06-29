import './CollectionCards.css';
import { FaCircleChevronRight } from "react-icons/fa6";

import Design1 from '../../assets/Card/Design1.png';
import Design2 from '../../assets/Card/Design2.png';
import Design3 from '../../assets/Card/Design3.png';
import Design4 from '../../assets/Card/Design4.png';
import Design5 from '../../assets/Card/Design5.png';

const CollectionCards = () => {
  return (
    <section className='container'>
      <div className='cards-content'>
        <h1 className='text-primary-400 fs-1100'>
          Explore Sweets O'clock by Patty
        </h1>

        <div className='cards-box'>

          <div className='cards-1 card'>
            <img src={Design1} alt="Design 1" />


            <div className="card-details">
              <div className='card-text'>
                <h3 className='fw-bold fs-800'>TASTE WHERE IT ALL STARTED</h3>
                <h2 className='fw-regular'>Our Signature Cookies</h2>
              </div>

              <div className='icons'>
                <FaCircleChevronRight className='arrow-icon' />
              </div>
            </div>
          </div>

          <div className='cards-2 card'>
            <img src={Design2} alt="Design 2" />

            <div className="card-details">
              <div className='card-text'>
                <h3 className='fw-bold fs-800'>Limited Edition</h3>
                <h2 className='fw-regular'>SEASONAL MUST-HAVES</h2>
              </div>

              <div className='icons'>
                <FaCircleChevronRight className='arrow-icon' />
              </div>
            </div>
          </div>

          <div className='cards-3 card'>
            <img src={Design3} alt="Design 3" />

            <div className="card-details">
              <div className='card-text'>
                <h3 className='fw-bold fs-800'>Premium Baskets</h3>
                <h2 className='fw-regular'>GIVE THE GIFT OF SWEETS</h2>
              </div>

              <div className='icons'>
                <FaCircleChevronRight className='arrow-icon' />
              </div>
            </div>
          </div>

          <div className='cards-4 card'>
            <img src={Design4} alt="Design 4" />

            <div className="card-details">
              <div className="card-text">
                <h3 className='fw-bold fs-800'>Bakery</h3>
                <h2 className='fw-regular'>EXPLORE OUR BAKERY</h2>
              </div>

              <div className="icons">
                <FaCircleChevronRight className='arrow-icon' />
              </div>
            </div>
          </div>

          <div className='cards-5 card'>
            <img src={Design5} alt="Design 5" />

            <div className="card-details">
              <div className='card-text'>
                <h3 className='fw-bold fs-800'>Sweet O'clock Market</h3>
                <h2 className='fw-regular'>BRANDED MERCH</h2>
              </div>

              <div className='icons'>
                <FaCircleChevronRight className='arrow-icon' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CollectionCards;