import React, { useState } from 'react';
import API from '../../API';
import PopUp from '../PopUp';
import './style.css';

const InventoryTable = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [newItemName, setNewItemName] = useState('');
    const [newUnit, setNewUnit] = useState('');
    const [newWeight, setNewWeight] = useState('');
    const [currentEditedItemId, setCurrentEditedItemId] = useState(0);
    const filterText = props.filterText;

    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };

    const handleNewItemNameChange = (e) => {
        setNewItemName(e.target.value);
    };

    const handleNewUnitChange = (e) => {
        setNewUnit(e.target.value);
    };

    const handleNewWeightChange = (e) => {
        setNewWeight(e.target.value);
    };

    const onUpdate = (item) => {
        const updatedData = props.items.map((item, i) => i === currentEditedItemId ? {
            name: newItemName,
            units: newUnit,
            weight: newWeight,
        }: item);

        props.handleItems(updatedData);
        
        props.items.map((item, i) => i === currentEditedItemId ? 
        API.updateItem(item._id, updatedData[currentEditedItemId]).then(): null);
        sessionStorage.setItem('items', JSON.stringify(updatedData));
    };

    const openEditPopup = (item, key) => {
        setNewItemName(item.name);
        setNewWeight(item.weight);
        setNewUnit(item.units);
        setCurrentEditedItemId(key);
        togglePopUp();
    }

    const editItem = (e, item) => {
        e.preventDefault();

        onUpdate(item);
        togglePopUp();
    };

    const deleteItem = (key, item) => {
        let data = props.items.filter((item, i) => i !== key)
        props.handleItems(data);

        API.removeItem(item._id).then();
        sessionStorage.removeItem('items');
    };

    return(
        <div className="invtable">
            <table id="inventorytable">
                <thead>
                    <tr>
                        <th id="id">ID</th>
                        <th id="item-name">Name</th>
                        <th id="unit">Units</th>
                        <th id="weight">Weight (g)</th>
                        <th id="action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item, key) => item.name.toLowerCase().indexOf(filterText) === -1 ? (null) : (
                        <tr key={key}>
                            <td id="id">{key}</td>
                            <td id="item-name">{item.name}</td>
                            <td id="unit">{item.units}</td>
                            <td id="weight">{item.weight}</td>
                            <td id="action">
                                <button type="button" id="edit" onClick={() => openEditPopup(item, key)}>Edit</button>
                                {isOpen && <PopUp
                                    content = {<>
                                        <form className="edit-item" onSubmit={(event) => {editItem(event, item)}}>
                                            <h2>Edit Inventory</h2>
                                            <label htmlFor="item-name">Item Name:</label><br />
                                            <input type="text" id="item-name" name="item-name" onChange={handleNewItemNameChange} value={newItemName}></input><br />
                                            <label htmlFor="unit">Quantity (units):</label><br />
                                            <input type="text" id="unit" name="unit" onChange={handleNewUnitChange} value={newUnit}></input><br />
                                            <label htmlFor="weight">Weight (g):</label><br />
                                            <input type="text" id="weight" name="weight" onChange={handleNewWeightChange} value={newWeight}></input>
                                            <button type="submit" value="Submit" id="popup-edit">Update</button>
                                        </form>
                                    </>}
                                    handleClose = {togglePopUp}
                                />}
                                <button type="button" id="delete" onClick={() => deleteItem(key, item)}>Delete</button>
                            </td>
                        </tr>
                    ))}                  
                </tbody>
            </table>
        </div>
    );
};

export default InventoryTable;
