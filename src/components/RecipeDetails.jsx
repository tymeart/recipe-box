import React, { Component } from 'react';

const RecipeDetails = (recipe) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <h3>Ingredients</h3>
      <ul>{recipe.ingredients}</ul>
    </div>
  );
}
