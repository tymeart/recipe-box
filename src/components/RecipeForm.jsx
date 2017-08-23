import React, { Component } from 'react';

class RecipeForm extends Component {
  render() {
    return (
      <div>
        <h2>Add a New Recipe</h2>
        <form>
          <label htmlFor="title">Recipe Title</label>
          <input id="title" type="text" />

          <label htmlFor="ingredients">Ingredients</label>
          <textarea id="ingredients" />

          <label htmlFor="instructions">Instructions</label>
          <textarea id="instructions" />

          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default RecipeForm;
