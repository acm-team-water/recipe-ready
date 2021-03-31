import React, { useState, useEffect } from 'react';
import './style.css';
import NavBar from  '../components/NavBar';
import SearchBar from '../components/SearchBar';
import InventoryTable from '../components/InventoryTable'
import PopUp from '../components/PopUp'
import API from '../API';

const Inventory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [itemName, setItemName] = useState('');
    const [units, setUnit] = useState('');
    const [weight, setWeight] = useState('');
    const [items, setItems] = useState([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        API.getInventory().then((response) => {
            setItems(response.data.items);
            console.log(response);
        });
    }, []);

    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };

    const addItem = (e) => {
        const item = {
            name: itemName,
            units,
            weight, 
        };

        setItems(items => items.concat(item));

        API.createItem(item).then();
        
        setItemName('');
        setUnit('');
        setWeight('');
    };

    const handleItemNameChange = (e) => {
        setItemName(e.target.value);
    };

    const handleUnitChange = (e) => {
        setUnit(e.target.value);
    };

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const handleAddItem = (e) => {
        e.preventDefault();

        addItem();
        togglePopUp();
    };

    const handleItems = (newItems) => {
        setItems(newItems);
    }

    const handleFilterTextChange = (filterText) => {
        setFilterText(filterText);
    };

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className="top">
                <h1>My Food Inventory</h1>
                <button type="button" id="add" onClick={togglePopUp}>Add Item</button>
                {isOpen && <PopUp 
                    content = {<>
                        <form onSubmit={handleAddItem}>
                            <h2>Add to Inventory</h2>
                            <label htmlFor="item-name">Item Name:</label><br />
                            <input type="text" id="item-name" name="item-name" onChange={handleItemNameChange} value={itemName}></input><br />
                            <label htmlFor="unit">Quantity (units):</label><br />
                            <input type="text" id="unit" name="unit" onChange={handleUnitChange} value={units}></input><br />
                            <label htmlFor="weight">Weight (g):</label><br />
                            <input type="text" id="weight" name="weight" onChange={handleWeightChange} value={weight}></input>
                            <button type="submit" value="Submit" id="popup-add">Add Item</button>
                        </form>
                    </>}
                    handleClose = {togglePopUp}
                />}
            </div>
            <div>
                <SearchBar filterText={filterText} onFilterTextChange={handleFilterTextChange} />
            </div>
            <div>
                <InventoryTable items={items} handleItems={handleItems} filterText={filterText.toLowerCase()} />
            </div>
        </div>
    );
};

export default Inventory;
