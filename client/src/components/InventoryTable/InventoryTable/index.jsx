import React from 'react';
import './styles.css';


const InventoryTable = () =>{
    return(
        <div>
            <table>
                <InventoryItem name = 'Tomato' unites = '8' weight = '5'></InventoryItem>
            </table>
        </div>
    )
}

export default InventoryTable