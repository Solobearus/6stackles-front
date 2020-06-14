import React from "react";
import "./Products.css";
import { ProductInfo } from "../../components/ProductInfo/productInfo";
import { useSelector, useDispatch } from "react-redux";
import Search from "../../pages/Search/Search";

const Products = () => {
  const { text } = useSelector((state) => state.language);
  const { products } = useSelector((state) => state.products);

  return (
    <div className="products" data-testid="products">
      <div className="search_panel">
        <Search />
      </div>
      <ul className="products_list">
        <li>
          <ProductInfo name={products[1].name} desc={products[1].desc} />
          <img
            src={products[1].imgUrls[1]}
            alt={products[1].desc}
            className="products_img"
          />
        </li>
      </ul>
    </div>
  );
};

export default Products;
