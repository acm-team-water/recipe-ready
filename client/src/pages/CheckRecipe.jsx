import React from 'react';
import NavBar from  '../components/NavBar';
import { Link } from 'react-router-dom';
import './style.css';

const CheckRecipe = (props) => {
    return (
        <div className="check">
            <div>
                <NavBar />
            </div>
            <div>
                <Link to="/recipe"><button id="back">Back</button></Link>
            </div>
            <div>
                <figure>
                    <figcaption>Spaghetti and Meatballs</figcaption>
                    <img src="https://www.onceuponachef.com/images/2019/09/Easy-Spaghetti-and-Meatball-Recipe-1200x1669.jpg" alt="Can't be displayed"/>
                </figure>
            </div>
            <div className="ingredient">
                <h2>Ingredients:</h2>
                <ol>
                    <li>Spaghetti</li>
                    <li>Tomato</li>
                    <li>Meatball</li>
                    <li>Parmesan Cheese</li>
                    <li>Basil</li>
                </ol>
            </div>
            <div>
                <button id="compare">Compare Inventory</button>
            </div>
        </div>
    );
};

export default CheckRecipe;
