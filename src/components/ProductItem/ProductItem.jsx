import React, { useState, useEffect } from "react";
import "./ProductItem.css";
import ProductInfo from "../ProductInfo/ProductInfo";
const ProductItem = (props) => {
  return (
    <div className="product_item">
      <ProductInfo name={props.name} desc={props.desc} id={props.id} />
      <div className="product_item_img_wrapper">
        <img src={props.imgUrl} alt={props.desc} className="product_item_img" />
        <span className="product_item_img_footer">
          <span>{props.price} $</span>
          <span> 12 km</span>
        </span>
      </div>
    </div>
  );
};
export default ProductItem;
