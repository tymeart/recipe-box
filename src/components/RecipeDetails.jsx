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
      <h3>Instructions</h3>
      <ol>
        {/* {recipe.instructions.map(step => <li key={}>{step}</li>)} */}
      </ol>
    </div>
  );
}

export default RecipeDetails;
