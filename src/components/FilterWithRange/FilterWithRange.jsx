import React, { useRef, useEffect } from "react";
import "./FilterWithRange.css";
import { searchSlice } from "../../store/slices";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/Input/Input";

const FilterWithRange = ({
  opened,
  nameOfFilter,
  searchInput,
  searchApplied,
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
    <div className="FilterWithRange" data-testid="FilterWithRange">
      {opened ? (
        <>
          <Input
            opened={opened}
            type="dropdown"
            value={searchInput}
            onChange={(e) => handleOnSearchChange(e.target.value)}
          />
          <ul className={"FilterWithRange__results_ul scroll scroll_dark"}>
            
          </ul>
        </>
      ) : (
        <>
          {console.log(searchApplied)}
          <div className="FilterWithRange__label">
            {searchApplied ? nameOfFilter : ""}
          </div>
          <div className="FilterWithRange__choise">
            {searchApplied ? `Min: ${searchApplied.min} - Max: ${searchApplied.max}` : nameOfFilter}
          </div>
        </>
      )}
    </div>
  );
};

export default FilterWithRange;
