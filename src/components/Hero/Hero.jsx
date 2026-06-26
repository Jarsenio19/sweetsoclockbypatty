import "./Hero.css";
import cookies from "../../assets/Cookies.png";
import ShopNowBotton from "../../common/ShopNowBotton/ShopNowBotton";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">

        <div className="hero-image-wrapper">
          <img
            src={cookies}
            alt="Cookies"
            className="hero-image"
          />
        </div>

        <div className="hero-text">
          <h4 className="fs-700">LIMITED-EDITION</h4>

          <h1 className="text-primary-400 fs-1000">
            OG Cookies Chip, Last Call
          </h1>

          <p className="fs-700">
            Bite into the bright, creamy flavor before this seasonal cookie is
            gone for good.
          </p>

          <ShopNowBotton />
        </div>

        <div className="description-box"></div>

      </div>
    </section>
  );
};

export default Hero;