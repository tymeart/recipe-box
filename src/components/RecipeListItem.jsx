import React from 'react';

const RecipeListItem = (props) => {
  return (
    <li onClick={props.handleRecipeClick}>{props.recipe[0]}</li>
  );
}

export default RecipeListItem;
