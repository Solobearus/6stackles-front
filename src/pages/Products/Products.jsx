import React from "react";
import "./Products.css";
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/async";
import { userAuthSlice, userDetailsSlice } from "../../store/slices";
import Input from "../../components/Input/Input";

const Products = () => {
  return <div className="products" data-testid="products"></div>;
};

export default Products;
