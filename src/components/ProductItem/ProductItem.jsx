import React, { useState, useEffect } from "react";
import "./ProductItem.css";
import ProductInfo from "../ProductInfo/ProductInfo";
import imagePlaceholder from "../../images/imagePlaceholder.jpg";

const ProductItem = ({ name, desc, id, price, imgUrl }) => {
  return (
    <li className="product_item">
      <ProductInfo name={name} desc={desc} id={id} />
      <div className="product_item_img_wrapper">
        <img
          src={imgUrl ? imgUrl : imagePlaceholder}
          alt={name}
          className="product_item_img"
        />
        <div className="product_item_img_footer">
          <span>{price} $</span>
          <span> 12 km</span>
        </div>
      </div>
    </li>
  );
};
export default ProductItem;
