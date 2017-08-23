import React from 'react';

const RecipeDetails = (props) => {
  return (
    <div>
      <h2>{props.recipe.title}</h2>
      <button>Edit</button>
      <button>Delete</button>

      <h3>Ingredients</h3>
      <ul>
        {props.recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
      </ul>
      
      <h3>Instructions</h3>
      <ol>
        {props.recipe.instructions}
      </ol>
    </div>
  );
}

export default RecipeDetails;
