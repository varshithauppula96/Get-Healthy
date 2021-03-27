import React from 'react';
//import style from './style/recipe.module.css';


const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li key={ingredient.text + ingredient.calories}>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <p>{calories}</p>
            <img  src={image} alt=""></img>
        </div>
    );
}

export default Recipe;