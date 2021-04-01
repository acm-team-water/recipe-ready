import React, { useState } from 'react';
import './style.css';
import NavBar from  '../components/NavBar';
import SearchBar from '../components/SearchBar';
import RecipeTable from '../components/RecipeTable';

const Recipe = () => {
    const [filterText, setFilterText] = useState('');

    const handleFilterTextChange = (filterText) => {
        setFilterText(filterText);
    };

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <h1>Find a Recipe!</h1>
            </div>
            <div>
                <SearchBar filterText={filterText} onFilterTextChange={handleFilterTextChange} />
            </div>
            <div>
                <RecipeTable filterText={filterText.toLowerCase()} />
            </div>
        </div>
    );
};

export default Recipe;
