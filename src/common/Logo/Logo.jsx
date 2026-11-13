import "./Logo.css";
import { logoData } from "../../data/Data";
import { useNavigate } from "react-router";

const Logo = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`logo ${className}`}
      onClick={() => navigate("/")}
      style={{ cursor: "pointer" }}
    >
      <img src={logoData.image} alt={logoData.alt} />
    </div>
  );
};

export default Logo;