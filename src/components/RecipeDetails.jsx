import React from 'react';

const RecipeDetails = (recipe) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <button>Edit</button>
      <button>Delete</button>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
      </ul>
    </div>
  );
}

export default RecipeDetails;
