import React from 'react';
import RecipeListItem from './RecipeListItem';

const RecipeList = (props) => {
  const recipeItems = props.recipes.map((recipe, index) => {
    return (
      <RecipeListItem
        key={index}
        data-id={index}
        handleRecipeClick={props.handleRecipeClick}
        recipe={recipe}
      />
      );
    });

  return (
    <ul>
      {recipeItems}
    </ul>
  );
}

export default RecipeList;
