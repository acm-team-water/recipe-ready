import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = (props) => {
    return (
        <div id="navbar">
            <div className="title">
                <h2>Recipe Ready</h2>
            </div>
            <div className="nav-buttons">
                <Link to="/inventory">Inventory</Link>
                <Link to="/recipe">Recipes</Link>
            </div>
        </div>
    );
};

export default NavBar;
