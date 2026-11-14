import { useEffect, useState } from "react";
import { bannerData } from "../../data/Data";
import "./Banner.css";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bannerData.length);
        setAnimate(false);
      }, 500);

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <p className={animate ? "banner-text slide-out" : "banner-text"}>
        {bannerData[currentIndex]}
      </p>
    </div>
  );
};

export default Banner;