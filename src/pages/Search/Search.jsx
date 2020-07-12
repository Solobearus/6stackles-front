import React from "react";
import "./Search.css";
import { useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ItemGallery from "../../components/ItemGallery/ItemGallery";
import FilterWithSearch from "../../components/FilterWithSearch/FilterWithSearch";
import FilterWithRange from "../../components/FilterWithRange/FilterWithRange";
import { useSelector, useDispatch } from "react-redux";
import { searchSlice, productsSlice } from "../../store/slices";
import { useHistory, Link } from "react-router-dom";

const Search = () => {
  const [isInputSelected, setIsInputSelected] = useState(true);
  const { text } = useSelector((state) => state.language);

  const {
    textSearchInput,
    categorySearchInput,
    categorySearchApplied,
    locationSearchInput,
    locationSearchApplied,
    priceSearchInput,
    priceSearchApplied,
    conditionSearchInput,
    conditionSearchApplied,
    categories,
    conditions,
    locations,
  } = useSelector((state) => state.search);

  const {
    setCategorySearchInput,
    setCategorySearchApplied,
    setLocationSearchInput,
    setLocationSearchApplied,
    setPriceSearchInput,
    setPriceSearchApplied,
    setConditionSearchInput,
    setConditionSearchApplied,
  } = searchSlice.actions;

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchSlice.actions.resetSearchInput());
  }, []);

  const handleSearchSubmit = () => {
    dispatch(searchSlice.actions.submitSearch());
    dispatch(
      productsSlice.actions.filterProducts({
        textSearchInput,
        categorySearchInput,
        locationSearchInput,
        priceSearchInput,
        conditionSearchInput,
      })
    );
    history.push("products");
  };

  return (
    <div className="search" data-testid="search">
      <div className="nothing"></div>
      <Link className="product_info_link" to={`/products`}>
        🔙
      </Link>
      <div className="search_input_wrapper">
        {isInputSelected ? (
          <Input
            value={textSearchInput}
            className="search_input_wrapper_display"
            onBlur={() => setIsInputSelected(false)}
            onChange={(e) =>
              dispatch(searchSlice.actions.setTextSearchInput(e.target.value))
            }
          />
        ) : (
          <div
            className="search_input_wrapper_display"
            onClick={() => setIsInputSelected(true)}
          >
            {textSearchInput.trim() == "" ? "Write what you need" : textSearchInput}
          </div>
        )}
      </div>

      <ItemGallery>
        <FilterWithSearch
          nameOfFilter={"category"}
          searchInput={categorySearchInput}
          // searchApplied={categorySearchApplied}
          searchOptions={categories}
          setSearchInput={setCategorySearchInput}
          // setSearchApplied={setCategorySearchApplied}
        />
        <FilterWithSearch
          nameOfFilter={"location"}
          searchInput={locationSearchInput}
          // searchApplied={locationSearchApplied}
          searchOptions={locations}
          setSearchInput={setLocationSearchInput}
          // setSearchApplied={setLocationSearchApplied}
        />
        <FilterWithSearch
          nameOfFilter={"condition"}
          searchInput={conditionSearchInput}
          // searchApplied={conditionSearchApplied}
          searchOptions={conditions}
          setSearchInput={setConditionSearchInput}
          // setSearchApplied={setConditionSearchApplied}
        />
        <FilterWithRange
          nameOfFilter={"price"}
          searchInput={priceSearchInput}
          // searchApplied={priceSearchApplied}
          setSearchInput={setPriceSearchInput}
          // setSearchApplied={setPriceSearchApplied}
        />
      </ItemGallery>

      <Button
        className={"search_submit_btn"}
        value={text.default.search.submit}
        onClick={() => handleSearchSubmit()}
      />
    </div>
  );
};

export default Search;
