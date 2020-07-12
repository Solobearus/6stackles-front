import React from "react";
import { Link } from "react-router-dom";
import "./ProductInfo.css";

const ProductInfo = ({ name, desc, id }) => {
  return (
    <div className="product_info">
      <h3 className="product_info_h3">{name}</h3>
      <p className="product_info_p">{desc}</p>
      <Link className="product_info_link" to={`/product/${id}`}>
        read more ...
      </Link>
    </div>
  );
};
export default ProductInfo;
