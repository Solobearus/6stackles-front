import React from "react";
import "./MenueLink.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenueLink = ({ path, title, iconNameString }) => {
  return (
    <li className="menue_link_li">
      <FontAwesomeIcon icon={iconNameString} className="menue_link_icon" />
      <Link to={path} className="menue_link_link">
        {title}
      </Link>
    </li>
  );
};
export default MenueLink;
