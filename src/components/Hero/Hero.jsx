import "./Hero.css";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import { heroData } from "../../data/Data";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/shop");
  };

  return (
    <section className="hero-container">
      {heroData.map((item) => (
        <div className="hero-content" key={item.id}>
          <div className="hero-image-wrapper">
            <img
              src={item.image}
              alt={item.alt}
              className="hero-image"
            />
          </div>

          <div className="hero-text">
            <h4 className="fs-700">
              {item.subtitle}
            </h4>

            <h1 className="text-primary-400 fs-1000">
              {item.title}
            </h1>

            <p className="fs-700">
              {item.description}
            </p>

            <PrimaryButton
              text="Shop Now"
              onClick={handleShopClick}
            />
          </div>

          <div className="description-box"></div>
        </div>
      ))}
    </section>
  );
};

export default Hero;