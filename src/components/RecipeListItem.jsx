import React from 'react';

const RecipeListItem = (props) => {
  return (
    <li onClick={props.handleRecipeClick}>{props.recipe.title}</li>
  );
}

export default RecipeListItem;
