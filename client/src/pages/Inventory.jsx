import React from 'react';
import './style.css';
import NavBar from  '../components/NavBar';
import SearchBar from '../components/SearchBar';
import InventoryTable from '../components/InventoryTable'

const Inventory = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div id="top">
                <h1>My Food Inventory</h1>
                <button type="button" id="add">Add Item</button>
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <InventoryTable />
            </div>
        </div>
    );
};

export default Inventory;
