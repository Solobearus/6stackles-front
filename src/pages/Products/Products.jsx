import React, { useState, useEffect } from "react";
import "./Products.css";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import SearchPanel from "../../components/SearchPanel/SearchPanel";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const [itemsAmount, setItemsAmount] = useState(10);
  const [hasMore, setHaseMore] = useState(true);
  const [productsList, setProductsList] = useState(
    Array.from({ length: itemsAmount }, (v, i) => products[i])
  );
  useEffect(() => {
    if (itemsAmount <= products.length) {
      const newProductsList = Array.from(
        { length: itemsAmount },
        (v, i) => products[i]
      );
      setProductsList(newProductsList);
    } else {
      setHaseMore(false);
    }
  }, [itemsAmount]);

  const fetchData = () => {
    debugger;
    setItemsAmount(itemsAmount + 10);
  };

  return (
    <>
      <SearchPanel />
      <div
        id="scrollableDiv"
        className="products scroll scroll_dark"
        data-testid="products"
      >
        <InfiniteScroll
          dataLength={productsList.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>loading...</h4>}
          endMessage={<h4>end of products</h4>}
          scrollableTarget="scrollableDiv"
        >
          <ul className="products_list ">
            {productsList.map((item) => (
              <li className="product_item" key={item.name}>
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
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Products;
