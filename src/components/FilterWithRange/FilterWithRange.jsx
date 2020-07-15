import React from "react";
import "./FilterWithRange.css";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";

const FilterWithRange = ({
  opened,
  nameOfFilter,
  searchInput,
  setSearchInput,
}) => {
  const dispatch = useDispatch();

  const handleOnSearchChange = (input) => {
    dispatch(setSearchInput(input));
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
                id={"min"}
                focus={true}
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
                id={"max"}
                focus={false}
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
          <div className="FilterWithRange__label">
            {searchInput ? nameOfFilter : ""}
          </div>
          <div className="FilterWithRange__choise">
            {searchInput
              ? `Min: ${searchInput.min} - Max: ${searchInput.max}`
              : nameOfFilter}
          </div>
        </>
      )}
    </div>
  );
};

export default FilterWithRange;
