import React from 'react';
import RecipeListItem from './RecipeListItem';

const RecipeList = (props) => {
  const recipeItems = props.recipes.map(recipe => <RecipeListItem recipe={recipe} />);
  return (
    <ul>
      {recipeItems}
    </ul>
  );
}

export default RecipeList;
