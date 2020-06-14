import React from "react";
import "./Products.css";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo.jsx";
import { useSelector, useDispatch } from "react-redux";
import Search from "../../pages/Search/Search";

const Products = () => {
  const { text } = useSelector((state) => state.language);
  const { products } = useSelector((state) => state.products);

  return (
    <div className="products" data-testid="products">
      <div className="search_panel">
        {/* <Search /> */}
        <input />
      </div>
      <ul className="products_list">
        {products.map((item) => (
          <li className="product_item">
            <ProductInfo name={item.name} desc={item.desc} />
            <div className="product_img_wrapper">
              <img
                src={item.imgUrls[1]}
                alt={item.desc}
                className="product_img"
              />
              <span className="produc_img_footer">
                <span>{item.price} $</span>
                <span> 12 km</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
