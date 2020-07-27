import React from "react";
import "./FilterWithSearch.css";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";

const FilterWithSearch = ({
  opened,
  nameOfFilter,
  searchInput,
  searchOptions,
  setSearchInput,
}) => {
  const dispatch = useDispatch();

  const handleOnOptionClick = (option) => {
    dispatch(setSearchInput(option));
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
                  <li key={option} onClick={() => handleOnOptionClick(option)}>
                    {option}
                  </li>
                ))}
          </ul>
        </>
      ) : (
        <>
          <div className="filterWithSearch__label">
            {searchInput ? nameOfFilter : ""}
          </div>
          <div className="filterWithSearch__choise">
            {searchInput ? searchInput : nameOfFilter}
          </div>
        </>
      )}
    </div>
  );
};

export default FilterWithSearch;
