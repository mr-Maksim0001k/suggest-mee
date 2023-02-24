import s from "./Logo.module.scss";
import icon from "../../assets/styles/icons/icon.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={s.logo_container}>
      <Link to="/">
        <img src={icon} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
