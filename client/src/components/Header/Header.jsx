import "./Header.css";
import { Link } from "react-router-dom";
import logoVbee from "./Logo/vbee-logo.png";
import Navbar from "./Navbar/Navbar";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/" className="headerLogoTitle">
        <img className="logoWC" src={logoVbee} alt="logo" />
        <h1 className="title">Vbee PES League</h1>
      </Link>

      <Navbar />
    </div>
  );
};

export default Header;
