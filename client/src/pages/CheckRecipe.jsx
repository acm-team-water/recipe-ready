import React, { useEffect, useState } from 'react';
import NavBar from  '../components/NavBar';
import { Link, useParams } from 'react-router-dom';
import API from '../API';
import './style.css';

const CheckRecipe = () => {
    let { id } = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        API.getOneRecipe(id).then((response) => {
            setRecipe(response.data.meals[0]);
            console.log(response);
        });
    }, [id]);

    const ingredients = [
        recipe.strIngredient1,
        recipe.strIngredient2,
        recipe.strIngredient3,
        recipe.strIngredient4,
        recipe.strIngredient5,
        recipe.strIngredient6,
        recipe.strIngredient7,
        recipe.strIngredient8,
        recipe.strIngredient9,
        recipe.strIngredient10,
        recipe.strIngredient11,
        recipe.strIngredient12,
        recipe.strIngredient13,
        recipe.strIngredient14,
        recipe.strIngredient15,
        recipe.strIngredient16,
        recipe.strIngredient17,
        recipe.strIngredient18,
        recipe.strIngredient19,
        recipe.strIngredient20
    ];

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
