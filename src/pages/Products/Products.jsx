import React from "react";
import "./Products.css";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo";
import { useSelector, useDispatch } from "react-redux";
import SearchPanel from "../../components/SearchPanel/SearchPanel";

const Products = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <>
      <SearchPanel />
      <div className="products scroll scroll_dark" data-testid="products">
        <ul className="products_list ">
          {products.map((item) => (
            <li className="product_item">
              <ProductInfo
                name={item.name}
                desc={item.desc}
                id={item.id || 1}
              />
              <div className="product_img_wrapper">
                <img
                  src={item.imgUrls[1]}
                  alt={item.desc}
                  className="product_img"
                />
                <span className="product_img_footer">
                  <span>{item.price} $</span>
                  <span> 12 km</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Products;
