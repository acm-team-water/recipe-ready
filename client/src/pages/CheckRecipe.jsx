import React, { useEffect, useState } from 'react';
import NavBar from  '../components/NavBar';
import MissingList from '../components/MissingList';
import { Link, useParams } from 'react-router-dom';
import API from '../API';
import './style.css';

const CheckRecipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        API.getOneRecipe(id).then((response) => {
            setRecipe(response.data.meals[0]);
            console.log(response);
        });
    }, [id]);

    const ingredients = Object.keys(recipe)
    .filter((key) => key.includes('strIngredient'))
    .map((ingredient) => recipe[ingredient])
    .filter((ing) => !!ing);

    const newIngredients = ingredients.map(item => item.toLowerCase());

    const displayedIngredients = newIngredients.map(item => item[0].toUpperCase() + item.slice(1));

    let data = JSON.parse(sessionStorage.getItem('items'));
    
    for (let i=0; i<data.length; i++) {
        data[i] = Object.keys(data[i]).filter((key) => key.includes('name'))
        .map((ingredient) => data[i][ingredient]);
    };
    
    let inventory = [].concat.apply([], data);
    inventory = inventory.map(item => item.toLowerCase());

    let missing = newIngredients.filter(item => inventory.indexOf(item) === -1);
    missing = missing.map(item => item[0].toUpperCase() + item.slice(1));

    const [isOpen, setIsOpen] = useState(false);

    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="check">
            <div>
                <NavBar />
            </div>
            <div>
                <Link to="/recipe"><button id="back">Back</button></Link>
            </div>
            <div className="left">
                <div>
                    <figure>
                        <figcaption>{recipe.strMeal}</figcaption>
                        <img src={recipe.strMealThumb} alt="Can't be displayed"/>
                    </figure>
                </div>
                <div>
                    <button id="compare" onClick={togglePopUp}>Compare Inventory</button>
                    {isOpen && <MissingList
                        content = {<>
                            <div className="missing">
                                <h2>Missing: ({missing.length})</h2>
                                <div id="missinglist">
                                    <ol>
                                    {missing.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                    </ol>
                                </div>
                            </div>
                        </>}
                    />}
                </div>
                </div>
            <div className="ingredient">
                <h2>Ingredients: ({ingredients.length})</h2>
                <div id="ingredientlist">
                    <ol>
                        {displayedIngredients.map((ingredient) => (
                            <li>{ingredient}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default CheckRecipe;
