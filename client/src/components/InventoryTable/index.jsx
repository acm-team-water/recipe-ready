import React, { useState } from 'react';
import PopUp from '../PopUp';
import './style.css';

const InventoryTable = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };

    const [newItemName, setNewItemName] = useState('');
    const [newUnit, setNewUnit] = useState('');
    const [newWeight, setNewWeight] = useState('');
    const [currentEditedItemId, setCurrentEditedItemId] = useState(0);

    const handleNewItemNameChange = (e) => {
        setNewItemName(e.target.value);
    };

    const handleNewUnitChange = (e) => {
        setNewUnit(e.target.value);
    };

    const handleNewWeightChange = (e) => {
        setNewWeight(e.target.value);
    };

    const onUpdate = () => {
        const updatedData = props.items.map((item, i) => i === currentEditedItemId ? {
            itemName: newItemName,
            unit: newUnit,
            weight: newWeight,
        }: item);
        props.handleItems(updatedData);
    };

    const openEditPopup = (item, key) => {
        setNewItemName(item.itemName);
        setNewWeight(item.weight);
        setNewUnit(item.unit);
        setCurrentEditedItemId(key);
        togglePopUp();
    }

    const editItem = (e) => {
        e.preventDefault();
        onUpdate();
        togglePopUp();
    };

    const deleteItem = (key) => {
        let data = props.items.filter((item, i) => i !== key)
        props.handleItems(data);
    };

    return(
        <div>
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
                    {props.items.map((item, key) => (
                        <tr key={key}>
                            <td id="id">{key}</td>
                            <td id="item-name">{item.itemName}</td>
                            <td id="unit">{item.unit}</td>
                            <td id="weight">{item.weight}</td>
                            <td id="action">
                                <button type="button" id="edit" onClick={() => openEditPopup(item, key)}>Edit</button>
                                {isOpen && <PopUp 
                                    content = {<>
                                        <form className="edit-item" onSubmit={(event) => {editItem(event)}}>
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
                                <button type="button" id="delete" onClick={() => deleteItem(key)}>Delete</button>
                            </td>
                        </tr> 
                    ))}                   
                </tbody>
            </table>
        </div>
    );
};

export default InventoryTable;
