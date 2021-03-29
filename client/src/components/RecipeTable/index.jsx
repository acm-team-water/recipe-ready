import React from 'react';
import './style.css';

const RecipeTable = (props) => {
    const filterText = props.filterText;
    const recipes = [
        {recipeName: "Spaghetti and Meatballs"},
        {recipeName: "Teriyaki Chicken and Rice"},
        {recipeName: "Vegetable Japanese Curry"},
        {recipeName: "Grilled Fish Tacos"},
        {recipeName: "Spinach Artichoke Dip"},
        {recipeName: "BBQ Baby Back Ribs"}
    ];

    return (
        <div className="rectable">
            <table id="recipetable">
                <tbody>
                    {recipes.map((recipe) => recipe.recipeName.toLowerCase().indexOf(filterText) === -1 ? (null) : (
                        <tr>
                            <td id="recipe-name"><a href="/check">{recipe.recipeName}</a></td>
                        </tr>
                    ))}   
                </tbody>
            </table>
        </div>
    );
};

export default RecipeTable;