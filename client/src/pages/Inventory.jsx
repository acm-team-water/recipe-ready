import React from 'react';
import NavBar from  '../components/NavBar';
import SearchBar from '../components/SearchBar';

const Inventory = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <h1>My Food Inventory</h1>
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <button type="button">Add Item</button>
            </div>
        </div>
    );
};

export default Inventory;