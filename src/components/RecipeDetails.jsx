import React from 'react';

const RecipeDetails = (props) => {
  const currentRecipeTitle = props.recipe[0];
  const currentRecipeDetails = JSON.parse(props.recipe[1]);

  return (
    <div className="RecipeDetails">
      <div className="recipe-heading">
        <h2>{currentRecipeTitle}</h2>
        <div>
          <button onClick={props.handleEditButtonClick.bind(this, props.recipe)} className="secondary">Edit</button>
        </div>
      </div>

      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {currentRecipeDetails.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
        </ul>
      </div>

      <div className="instructions">
        <h3>Instructions</h3>
        <pre>{currentRecipeDetails.instructions}</pre>
      </div>
    </div>
  );
}

export default RecipeDetails;
