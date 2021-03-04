import React from 'react';
import './style.css';

const InventoryItem = (props) => {
    return (
        <tr>
            <td id="name">{props.name}</td>
            <td id="unit">{props.unit}</td>
            <td id="weight">{props.weight}</td>
            <td id="action">
                <button type="button" id="edit">Edit</button>
                <button type="button" id="delete">Delete</button>
            </td>
        </tr>
    );
};

export default InventoryItem;
