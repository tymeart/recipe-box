import React from 'react';

const RecipeListItem = (props) => {
  return (
    <li
      className="recipe-list-item"
      onClick={props.handleRecipeClick}
    >
      {props.recipe.title}
    </li>
  );
}

export default RecipeListItem;
