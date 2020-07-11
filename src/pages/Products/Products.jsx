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

  const [currentPaginationIndex, setCurrentPaginationIndex] = useState(ITEMS_TO_GENERATE_PER_PAGE);
  const [hasMore, setHasMore] = useState(true);

  const [productsFilteredToDisplay, setProductsFilteredToDisplay] = useState(
    productsFiltered.slice(0, ITEMS_TO_GENERATE_PER_PAGE)
  );

  useEffect(() => {
    if (currentPaginationIndex <= productsFiltered.length) {
      setProductsFilteredToDisplay(
        [
          ...productsFilteredToDisplay,
          ...productsFiltered.slice(
            currentPaginationIndex - ITEMS_TO_GENERATE_PER_PAGE,
            currentPaginationIndex
          )
        ]
      );
    } else {
      setHasMore(false);
    }
  }, [currentPaginationIndex]);

  useEffect(() => {
    setCurrentPaginationIndex(ITEMS_TO_GENERATE_PER_PAGE);
    setProductsFilteredToDisplay(
      productsFiltered.slice(0, ITEMS_TO_GENERATE_PER_PAGE)
      // Array.from({ length: currentPaginationIndex }, (_, index) => productsFiltered[index])
    );
  }, [productsFiltered]);

  const fetchData = () => {
    setCurrentPaginationIndex(currentPaginationIndex + ITEMS_TO_GENERATE_PER_PAGE);
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
