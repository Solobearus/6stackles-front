import React, { useState } from "react";
import "./Header.css";
import yad from "../../img/yad.png";
import userLogo from "../../img/userLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideManue from "../SideMenue/SideMenue";
import { Link } from "react-router-dom";
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

        <Link className="header_wrapper" to={`/products`}>
          <img src={yad} alt="logo" className="header_logo" />
        </Link>
        <Link className="header_wrapper" to={`/profile`}>
          <img src={userLogo} alt="userLogo" className="header_userLogo" />{" "}
        </Link>
      </div>
      <SideManue open={sideMenueOpen} setOpen={setSideMenueOpen} />
    </>
  );
};

export default Header;
