import React from "react";
import "./Header.css";
import yad from "../../img/yad.png";
import userLogo from "../../img/userLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header" data-testid="header">
      <FontAwesomeIcon icon={faBars} className="header_ham" />
      <Link className="header_wrapper" to={`/products`}>
        <img src={yad} alt="logo" className="header_logo" />
      </Link>
      <Link className="header_wrapper" to={`/profile`}>
        <img src={userLogo} alt="userLogo" className="header_userLogo" />{" "}
      </Link>
    </div>
  );
};

export default Header;
