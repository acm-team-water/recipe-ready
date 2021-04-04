import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../API';
import './style.css';

const RecipeTable = (props) => {
    const { filterText } = props;
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        API.getAllRecipes().then((response) => {
            setRecipes(response.data);
            console.log(response);
        })
    });

    return (
        <div className="rectable">
            <table id="recipetable">
                <tbody>
                    {recipes.map((recipe) => recipe.strMeal.toLowerCase().indexOf(filterText) === -1 ? (null) : (
                        <tr>
                            <td id="recipe-name"><Link to={`/check/${recipe.idMeal}`}>{recipe.strMeal}</Link></td>
                        </tr>
                    ))}   
                </tbody>
            </table>
        </div>
    );
};

export default RecipeTable;