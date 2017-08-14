import React, { Component } from 'react';

class AddRecipeForm extends Component {
  render() {
    return (
      <form action="" method="POST">
        <label for="title">Recipe Title</label>
        <input id="title" type="text">
        <label for="ingredients">Ingredients</label>
        <input id="ingredients" type="text">
        <button>Save</button>
      </form>
    );
  }
}

export default AddRecipeForm;
