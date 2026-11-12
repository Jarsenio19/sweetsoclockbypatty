import "./Logo.css";
import { logoData } from "../../data/Data";

const Logo = ({ className = "" }) => {
  return (
    <div className={`logo ${className}`}>
      <img src={logoData.image} alt={logoData.alt} />
    </div>
  );
};

export default Logo;