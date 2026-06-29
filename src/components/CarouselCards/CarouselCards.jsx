import './CarouselCards.css'
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const CarouselCards = () => {
  return (
    <>
      <section className='container'>
        <div className='carousel-content'>
          <h1> Best Sellers</h1>
          <h2>SEE WHAT PEOPLE ARE LOVING</h2>

          <div className='carousel-box'>
            <div className='sales-box'>
              <p>Quick Shop</p>
              <img src="" alt="" />
              <div className='inside-sales-box'>
                <h3>Flavors</h3>
              </div>
              <div className='inside-sales-box'>
                <p></p>
              </div>
            </div>
            <div>
              <button></button>
              <FaCircleChevronLeft />
              <FaCircleChevronRight />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default CarouselCards