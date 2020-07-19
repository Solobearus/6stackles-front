import React, { useState, useEffect } from "react";
import MenueLink from "../MenueLink/MenueLink";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./SideMenue.css";

const SideMenue = ({ open }) => {
  const [menueItem, setMenueItem] = useState(1);
  const pages = [
    // { path: "/home", title: "Home Page", icon: "home" },
    // { path: "/contactus", title: "Contact Us", icon: "address-card" },
    { path: "/products", title: "Products", icon: "shopping-cart" },
    { path: "/products/create", title: "Create Product", icon: "plus-circle" },
  ];
  useEffect(() => {
    setMenueItem(2);
  }, []);
  return (
    <div className={`Menue_div ${open ? "open" : "closed"} `}>
      <Router>
        {pages.map((page) => (
          <MenueLink
            path={page.path}
            title={page.title}
            iconNameString={page.icon}
            key={page.title}
          />
        ))}
      </Router>
    </div>
  );
};
export default SideMenue;
