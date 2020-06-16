import React from "react";
import "./ProductInfo.css";
export const ProductInfo = (props) => {
  return (
    <div className="product_info">
      <h3 className="product_info_h3">{props.name}</h3>
      <p className="product_info_p">{props.desc}</p>
    </div>
  );
};
