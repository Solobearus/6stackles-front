import React, { useState, useEffect } from "react";
import "./SideMenue.css";

const SideMenue = ({ width }) => {
  const [item, setItem] = useState(1);
  useEffect(() => {
    setItem(2);
  }, []);
  return (
    <div className="Menue_div" width={width}>
      my content
    </div>
  );
};
export default SideMenue;
