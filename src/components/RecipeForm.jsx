import React, { Component } from 'react';

class RecipeForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="title">Recipe Title</label>
        <input id="title" type="text" />
        <label htmlFor="ingredients">Ingredients</label>
        <input id="ingredients" type="text" />
        <label htmlFor="instructions">Instructions</label>
        <input id="instructions" type="text" />
        <button>Save</button>
      </form>
    );
  }
}

export default RecipeForm;
