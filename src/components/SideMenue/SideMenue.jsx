import React, { useState, useEffect } from "react";
import "./SideMenue.css";

const SideMenue = ({ open }) => {
  const [menueItem, setMenueItem] = useState(1);
  useEffect(() => {
    setMenueItem(2);
  }, []);
  return (
    <div className={`Menue_div ${open ? "open" : "closed"} `}>sideMenue</div>
  );
};
export default SideMenue;
