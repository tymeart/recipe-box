import React from 'react';

const RecipeDetails = (recipe) => {
  return (
    <div>
      <h2>Recipe Title</h2>
      <button>Edit</button>
      <button>Delete</button>
      <h3>Ingredients</h3>
      <ul>Ingredients List</ul>
    </div>
  );
}

export default RecipeDetails;
