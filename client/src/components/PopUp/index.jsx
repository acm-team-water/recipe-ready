import React from 'react';
import './style.css';

const PopUp = (props) => {
    return (
        <div className='popup'>
            <div className="box">
                <span id="close" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    );
};

export default PopUp;
