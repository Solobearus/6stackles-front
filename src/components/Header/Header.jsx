import React, { useState } from "react";
import "./Header.css";
import yad from "../../img/yad.png";
import userLogo from "../../img/userLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideManue from "../SideMenue/SideMenue";

const Header = () => {
  const [sideMenueOpen, setSideMenueOpen] = useState(false);
  return (
    <>
      <div className="header" data-testid="header">
        <FontAwesomeIcon
          icon={faBars}
          className="header_ham"
          onClick={() => {
            console.log("clicked ham");
            setSideMenueOpen(!sideMenueOpen);
          }}
        />

        <img src={yad} alt="logo" className="header_logo" />
        <img src={userLogo} alt="userLogo" className="header_userLogo" />
      </div>
      <SideManue open={sideMenueOpen} />
    </>
  );
};

export default Header;
