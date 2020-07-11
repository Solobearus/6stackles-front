import React, { useRef, useEffect } from "react";
import "./FilterWithSearch.css";
import { searchSlice } from "../../store/slices";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/Input/Input";

const FilterWithSearch = ({
  opened,
  nameOfFilter,
  searchInput,
  searchApplied,
  searchOptions,
  setSearchInput,
  setSearchApplied,
}) => {
  const dispatch = useDispatch();

  const handleClick = (option) => {
    dispatch(setSearchInput(option));
    dispatch(setSearchApplied(option));
  };

  const handleOnSearchChange = (input) => {
    dispatch(setSearchInput(input));
  };

  return (
    <div className="filterWithSearch" data-testid="filterWithSearch">
      {opened ? (
        <>
          <Input
            opened={opened}
            type="dropdown"
            value={searchInput}
            onChange={(e) => handleOnSearchChange(e.target.value)}
          />
          <ul className={"filterWithSearch__results_ul scroll scroll_dark"}>
            {searchOptions &&
              searchOptions
                .filter((option) => option.includes(searchInput))
                .map((option) => (
                  <li key={option} onClick={() => handleClick(option)}>
                    {option}
                  </li>
                ))}
          </ul>
        </>
      ) : (
        <>
          {console.log(searchApplied)}
          <div className="filterWithSearch__label">
            {searchApplied ? nameOfFilter : ""}
          </div>
          <div className="filterWithSearch__choise">
            {searchApplied ? searchApplied : nameOfFilter}
          </div>
        </>
      )}
    </div>
  );
};

export default FilterWithSearch;
