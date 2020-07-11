import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import ProductItem from "../../components/ProductItem/ProductItem";

const ITEMS_TO_GENERATE_PER_PAGE = 10;

const Products = () => {
  const { productsFiltered } = useSelector((state) => state.products);

  const [itemsAmount, setItemsAmount] = useState(ITEMS_TO_GENERATE_PER_PAGE);
  const [hasMore, setHasMore] = useState(true);

  const [productsFilteredToDisplay, setProductsListToDisplay] = useState(
    productsFiltered.slice(0, ITEMS_TO_GENERATE_PER_PAGE)
  );

  useEffect(() => {
    if (itemsAmount <= productsFiltered.length) {
      setProductsListToDisplay(
        {
          ...productsFiltered,
          ...productsFiltered.slice(
            itemsAmount - ITEMS_TO_GENERATE_PER_PAGE,
            itemsAmount
          )
        }
      );
    } else {
      setHasMore(false);
    }
  }, [itemsAmount]);

  useEffect(() => {
    setItemsAmount(ITEMS_TO_GENERATE_PER_PAGE);
    setProductsListToDisplay(
      productsFiltered.slice(0, ITEMS_TO_GENERATE_PER_PAGE)
      // Array.from({ length: itemsAmount }, (_, index) => productsFiltered[index])
    );
  }, [productsFiltered]);

  const fetchData = () => {
    setItemsAmount(itemsAmount + ITEMS_TO_GENERATE_PER_PAGE);
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
          dataLength={productsFilteredToDisplay.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          <ul className="products_list ">
            {productsFilteredToDisplay &&
              productsFilteredToDisplay.map((item) => (
                <ProductItem
                  key={item.id}
                  name={item.name}
                  id={item.id || 1}
                  desc={item.desc}
                  price={item.price}
                  imgUrl={item.imgUrls[1]}
                />
              ))}
          </ul>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Products;
