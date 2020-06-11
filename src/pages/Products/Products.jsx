import React from "react";
import "./Products.css";
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/Input/Input";

const Products = () => {
  const { text } = useSelector((state) => state.language);

  const search = () => {
    console.log("dispatch a search in products...");
  };
  return (
    <div className="products" data-testid="products">
      <Input
        type="text"
        placeholder={text.general.search}
        value={text}
        onChange={(e) => search(e.target.value)}
      />
      <div>products..</div>
    </div>
  );
};

export default Products;
