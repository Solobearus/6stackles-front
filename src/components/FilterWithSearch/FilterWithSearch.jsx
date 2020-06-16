import React from 'react'
import './FilterWithSearch.css'
import { searchSlice, categoriesSlice } from "../../store/slices";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/Input/Input";


const FilterWithSearch = ({ opened }) => {

    const dispatch = useDispatch();

    const {
        categories,
        categoriesSearch,
    } = useSelector((state) => state.categories);

    const {
        categorySearch,
    } = useSelector((state) => state.categories);


    const handleClick = category => {
        dispatch(categoriesSlice.actions.setCategoriesSearch(category))
        dispatch(searchSlice.actions.setCategorySearch(category))
    }

    const handleOnSearchChange = search => {
        dispatch(categoriesSlice.actions.setCategoriesSearch(search));
    }

    return (
        < div className="filterWithSearch" data-testid="filterWithSearch">
            {opened ?
                <>
                    <div>{categorySearch ? "category" : ""}</div>
                    <div>{categorySearch ? categorySearch : "category"}</div>
                </>
                :
                <>
                    <Input
                        type='dropdown'
                        value={categoriesSearch}
                        onChange={(e) => handleOnSearchChange(e.target.value)} />
                    <ul>
                        {categories && categories
                            .filter(category => category.includes(categoriesSearch))
                            .map(category =>
                                <li onClick={handleClick(category)}>{category}</li>
                            )}
                    </ul>

                </>}
        </div >
    )
}

export default FilterWithSearch
