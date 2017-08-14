import React, { Component } from 'react';

const RecipeListItem = (recipe) => {
  return (
    <li>{recipe.title}</li>
  );
}

export default RecipeListItem;
