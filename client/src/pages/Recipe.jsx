import React from 'react';
import './style.css';
import NavBar from  '../components/NavBar';
import SearchBar from '../components/SearchBar';

const Recipe = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <h1>Find a Recipe!</h1>
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
    );
};

export default Recipe;
