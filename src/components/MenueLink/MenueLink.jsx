import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenueLink = ({ path, title, iconNameString }) => {
  return (
    <li>
      <FontAwesomeIcon icon={iconNameString} />
      <Link to={path}>{title}</Link>
    </li>
  );
};
export default MenueLink;
