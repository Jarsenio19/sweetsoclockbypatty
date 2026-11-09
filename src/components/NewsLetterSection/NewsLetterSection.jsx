import './NewsLetterSection.css'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";





const NewsLetterSection = () => {
  return (
    <div className='container'>

      <div className='NewsLetterSection-container'>
        <h2 className='text-primary-400 fw-bold fs-1100'>Get 15% Off Your First Order</h2>
        <h4 className='text-primary-400 fw-semi-bold'>Sign up for our email list and enjoy 15% off your first order, plus new flavors, seasonal specials, and exclusive offers.</h4>

        <div className='search-box'>
          <input type='email' placeholder='Email address' />
          <button className='search-button text-primary-400'>Sign up</button>
          <h5 className='text-primary-400 fw-regular'>By signing up, you agree to receive marketing emails from Sweets o'clock. You can unsubscribe at any time.</h5>
        </div>

        <h2 className='text-primary-400 fw-bold fs-1100'>Follow Sweets o'clock</h2>
        <div className='socials-icons'>
          <a href="" aria-label='facebook'><FaFacebookF /></a>
          <a href="" aria-label='youtube'><FaYoutube /></a>
          <a href="" aria-label='instagram'><FaInstagram /></a>
          <a href="" aria-label='tiktok'><FaTiktok /></a>

        </div>
      </div>


    </div>
  )
}

export default NewsLetterSection