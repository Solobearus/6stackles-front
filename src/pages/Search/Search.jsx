import React from "react";
import "./Search.css";
import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ItemGallery from "../../components/ItemGallery/ItemGallery";
import FilterWithSearch from "../../components/FilterWithSearch/FilterWithSearch";
import { useSelector, useDispatch } from "react-redux";
import { searchSlice, userDetailsSlice } from "../../store/slices";


const Search = () => {

  const [isInputSelected, setIsInputSelected] = useState(true);

  const { text } = useSelector((state) => state.language);
  const {
    textSearch,
    categorySearch,
    locationSearch,
    priceSearch,
    conditionSearch
  } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const handleSearchSubmit = () => {
    console.log("im in handleSearchSubmit");
  };

  return (
    <div className="search" data-testid="search">
      <div className="nothing"></div>
      <div className="search_input_wrapper">
        {isInputSelected ? (
          <Input
            // className="search_input_wrapper_input"
            value={textSearch}
            onChange={(e) => dispatch(searchSlice.actions.setTextSearch(e.target.value))}
          />
        ) : (
            <div className="search_input_wrapper_display">{textSearch}</div>
          )}
      </div>
      <ItemGallery>
        <FilterWithSearch />
        <FilterWithSearch />
        <FilterWithSearch />
        <FilterWithSearch />
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
