import React from "react";
import "./ProductInfo.css";
export const ProductInfo = (props) => {
  return (
    <div className="product_info">
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
    </div>
  );
};
