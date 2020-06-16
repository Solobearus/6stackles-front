import React from "react";
import "./Search.css";
import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ItemGallery from "../../components/ItemGallery/ItemGallery";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

import { useSelector } from "react-redux";

const Search = () => {
  const { text } = useSelector((state) => state.language);
  const [search, setSearch] = useState("");
  const [isInputSelected, setIsInputSelected] = useState(true);

  console.log(text.default);
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
            // type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        ) : (
          <div className="search_input_wrapper_display">{search}</div>
        )}
      </div>
      <ItemGallery>
        <CategoryFilter />
        <CategoryFilter />
        <CategoryFilter />
        <CategoryFilter />
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
