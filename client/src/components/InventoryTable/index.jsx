import React from 'react';
import InventoryItem from '../InventoryItem';
import './style.css';

const InventoryTable = () => {
    return(
        <div>
            <table id="inventorytable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Units</th>
                        <th>Weight (g)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <InventoryItem name="tomato" unit="3" weight="null"/>
                    <InventoryItem name="garlic" unit="5" weight="null"/>
                    <InventoryItem name="sugar" unit="null" weight="200"/>
                    <InventoryItem name="orange" unit="2" weight="null"/>
                    <InventoryItem name="cinnamon" unit="null" weight="10"/>
                </tbody>
            </table>
        </div>
    );
};

export default InventoryTable;
