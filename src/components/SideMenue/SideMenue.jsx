import React, { useState, useEffect } from "react";
import MenueLink from "../MenueLink/MenueLink";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./SideMenue.css";

const SideMenue = ({ open }) => {
  const [menueItem, setMenueItem] = useState(1);
  const pages = [
    { path: "/products", title: "Products", icon: "faBars" },
    { path: "/products/create", title: "Create Product" },
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
            icon={page.icon}
            key={page.title}
          />
        ))}
      </Router>
    </div>
  );
};
export default SideMenue;
