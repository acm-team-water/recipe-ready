import React from 'react';

const SearchBar = () => {
    return  (
        <div>
            <form>
                <input type="text" placeholder="Search"></input>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;