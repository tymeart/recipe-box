import React from 'react';

const RecipeListItem = (props) => {
  return (
    <li>{props.recipe.title}</li>
  );
}

export default RecipeListItem;
