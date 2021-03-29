import React, { useState } from 'react';
import './style.css';
import NavBar from  '../components/NavBar';
import SearchBar from '../components/SearchBar';
import InventoryTable from '../components/InventoryTable'
import PopUp from '../components/PopUp'

const Inventory = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };

    const [itemName, setItemName] = useState('');
    const [unit, setUnit] = useState('');
    const [weight, setWeight] = useState('');
    const [items, setItems] = useState([]);
    const [filterText, setFilterText] = useState('');

    const addItem = (e) => {
        setItems(items => items.concat({
            itemName: itemName,
            unit: unit,
            weight: weight
        }));
        
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
                            <input type="text" id="unit" name="unit" onChange={handleUnitChange} value={unit}></input><br />
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
