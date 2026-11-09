import "./Hero.css";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import { heroData } from "../../data/Data";

const Hero = () => {
  return (
    <section className="hero-container">
      {heroData.map((item) => (
        <div className="hero-content" key={item.id} >
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
            <PrimaryButton text="Shop Now" />
          </div>
          <div className="description-box"></div>

        </div>
      ))}
    </section>
  );
};

export default Hero;