import React from 'react';
import './style.css';

const SearchBar = (props) => {
    const handleFilterTextChange = (e) => {
        props.onFilterTextChange(e.target.value);
    };

    return  (
        <div>
            <form>
                <input type="text" id="searchbar" placeholder="Search..." value={props.filterText} onChange={handleFilterTextChange}></input>
            </form>
        </div>
    );
};

export default SearchBar;
