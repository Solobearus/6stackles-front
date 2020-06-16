import React, { useRef, useEffect } from 'react'
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
    } = useSelector((state) => state.search);

    const handleClick = category => {
        dispatch(categoriesSlice.actions.setCategoriesSearch(category))
        console.log(`test`)
        dispatch(searchSlice.actions.setCategorySearch(category))
    }

    const handleOnSearchChange = search => {
        dispatch(categoriesSlice.actions.setCategoriesSearch(search));
    }

    return (
        < div className="filterWithSearch" data-testid="filterWithSearch">
            {opened ?
                <>
                    <Input
                        opened={opened}
                        type='dropdown'
                        value={categoriesSearch}
                        onChange={(e) => handleOnSearchChange(e.target.value)} />
                    <ul className={'filterWithSearch__results_ul scroll scroll_dark'}>
                        {categories && categories
                            .filter(category => category.includes(categoriesSearch))
                            .map(category =>
                                <li onClick={() => handleClick(category)}>{category}</li>
                            )}
                    </ul>
                </>
                :
                <>
                    {console.log(categorySearch)}
                    <div className="filterWithSearch__label">{categorySearch ? "category" : ""}</div>
                    <div className="filterWithSearch__choise">{categorySearch ? categorySearch : "category"}</div>
                </>
            }
        </div >
    )
}

export default FilterWithSearch
