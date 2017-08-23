import React from 'react';

const RecipeDetails = (props) => {
  return (
    <div className="RecipeDetails">
      <div className="recipe-heading">
        <h2>{props.recipe.title}</h2>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>

      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {props.recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
        </ul>
      </div>

      <div className="instructions">
        <h3>Instructions</h3>
        <ol>
          {props.recipe.instructions}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetails;
