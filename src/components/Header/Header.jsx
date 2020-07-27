import React, { useState } from "react";
import "./Header.css";
import yad from "../../img/yad.png";
import userLogo from "../../img/userLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideManue from "../SideMenue/SideMenue";

const Header = () => {
  const [sideMenueOpen, setSideMenueOpen] = useState(false);
  return (
    <>
      <div className="header" data-testid="header">
        <FontAwesomeIcon
          icon={"bars"}
          className="header_ham"
          onClick={() => {
            setSideMenueOpen(!sideMenueOpen);
          }}
        />

        <img src={yad} alt="logo" className="header_logo" />
        <img src={userLogo} alt="userLogo" className="header_userLogo" />
      </div>
      <SideManue open={sideMenueOpen} setOpen={setSideMenueOpen} />
    </>
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
