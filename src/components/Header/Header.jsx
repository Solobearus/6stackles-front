import React from "react";
import "./Header.css";
import yad from "../../img/yad.png";
<<<<<<< HEAD
import SideManue from "../SideMenue/SideMenue";
import userLogo from "../../img/userLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
=======
import userLogo from "../../img/userLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
>>>>>>> upstream/master

const Header = () => {
  return (
    <div className="header" data-testid="header">
<<<<<<< HEAD
      <FontAwesomeIcon
        icon={faBars}
        className="header_ham"
        onClick={setSideBarWidth}
      />
      <img src={yad} alt="logo" className="header_logo" />
      <img src={userLogo} alt="userLogo" className="header_userLogo" />
=======
      <FontAwesomeIcon icon={faBars} className="header_ham" />
      <img src={yad} alt="logo" className="header_logo" />
      <Link className="product_info_link" to={`/profile`}>
        <img src={userLogo} alt="userLogo" className="header_userLogo" />{" "}
      </Link>
>>>>>>> upstream/master
    </div>
  );
};

export default Header;
