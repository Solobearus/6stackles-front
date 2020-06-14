import React from 'react'
import './Search.css'
import { useState } from 'react'
import Button from '../../components/Button/Button'
import { useSelector } from "react-redux";

const Search = () => {

    const [search, setSearch] = useState('');
    const [isInputSelected, setIsInputSelected] = useState(false);

    const { text } = useSelector(state => state.language);

    console.log(text.default)
    const handleSearchSubmit = () => {
        console.log('im in handleSearchSubmit');
    }

    return (
        < div className="search" data-testid="search">
            <div className="nothing"></div>
            <div className="search_input_wrapper">
                <input className="search_input_wrapper_input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="search_input_wrapper_display">{search}</div>
            </div>
            <Button className={'search_submit_btn'} value={text.default.search.submit} onClick={() => handleSearchSubmit()} />
        </div >
    )
}

export default Search
