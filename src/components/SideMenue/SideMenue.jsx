import React, { useState, useEffect } from "react";
import MenueLink from "../MenueLink/MenueLink";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./SideMenue.css";

const SideMenue = ({ open }) => {
  const [menueItem, setMenueItem] = useState(1);
  const pages = [
    { path: "/", title: "Home", icon: "home" },
    // { path: "/contactus", title: "Contact Us", icon: "address-card" },
    { path: "/products", title: "Products", icon: "shopping-cart" },
    { path: "/products/create", title: "Create Product", icon: "plus-circle" },
  ];
  useEffect(() => {
    setMenueItem(2);
  }, []);
  return (
    <ul className={`Menue_ul ${open ? "open" : "closed"} `}>
      {pages.map((page) => (
        <MenueLink
          path={page.path}
          title={page.title}
          iconNameString={page.icon}
          key={page.title}
        />
      ))}
    </ul>
  );
};
export default SideMenue;
