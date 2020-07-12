import React, { useState, useEffect } from "react";

const Menue = () => {
  const [item, setItem] = useState(1);
  useEffect(() => {
    setItem(2);
  }, []);
  return <div>my content</div>;
};
export default Menue;
