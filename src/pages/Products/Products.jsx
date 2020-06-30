import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import ProductItem from "../../components/ProductItem/ProductItem";

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
            {productsList &&
              productsList.map((item, i) => (
                <li>
                  <ProductItem
                    name={item.name}
                    id={item.id || 1}
                    desc={item.desc}
                    price={item.price}
                    key={item.name + Math.random(10)}
                    imgUrl={item.imgUrls[1]}
                  />
                </li>
              ))}
          </ul>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Products;
