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

  const handleOnSearchChange = (input) => {
    dispatch(setSearchInput(input));
    dispatch(setSearchApplied(input));
  };

  return (
    <div className="FilterWithRange" data-testid="FilterWithRange">
      {opened ? (
        <>
          <div className="FilterWithRange__label">{nameOfFilter}</div>
          <div className={"FilterWithRange__Range_div"}>
            <div>
              Min :
              <Input
                focus={opened}
                type="text"
                value={searchInput.min}
                onChange={(e) =>
                  handleOnSearchChange({
                    min: e.target.value,
                    max: searchInput.max,
                  })
                }
              />
            </div>
            <div>
              Max :
              <Input
                focus={opened}
                type="text"
                value={searchInput.max}
                onChange={(e) =>
                  handleOnSearchChange({
                    min: searchInput.min,
                    max: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {console.log(searchApplied)}
          <div className="FilterWithRange__label">
            {searchApplied ? nameOfFilter : ""}
          </div>
          <div className="FilterWithRange__choise">
            {searchApplied
              ? `Min: ${searchApplied.min} - Max: ${searchApplied.max}`
              : nameOfFilter}
          </div>
        </>
      )}
    </div>
  );
};

export default FilterWithRange;
