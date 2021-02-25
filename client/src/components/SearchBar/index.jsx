import React from 'react';
import './style.css';

const SearchBar = () => {
    return  (
        <div>
            <form>
                <input type="text" id="searchbar" placeholder="Search..."></input>
                <button type="submit" id="searchbutton">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
