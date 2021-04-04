import React, { useEffect, useState } from 'react';
import NavBar from  '../components/NavBar';
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
                    <button id="compare">Compare Inventory</button>
                </div>
                </div>
            <div className="ingredient">
                <h2>Ingredients:</h2>
                <div id="ingredientlist">
                    <ol>
                        {ingredients.map((ingredient) => (
                            <li>{ingredient}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default CheckRecipe;
