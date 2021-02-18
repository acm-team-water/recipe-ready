import React from 'react';

const NavBar = () => {
    return (
        <div id="navbar">
            <div className="title">
                <h2>Recipe Ready</h2>
            </div>
            <div className="nav-buttons">
                <a>Inventory</a>
                <a>Recipes</a>
                <a>Log Out</a>
            </div>
        </div>
    );
};

export default NavBar;