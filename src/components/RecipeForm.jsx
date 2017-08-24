import React, { Component } from 'react';

class RecipeForm extends Component {
  render() {
    return (
      <div>
        <h2>Add a New Recipe</h2>
        <form>
          <label htmlFor="title">Recipe Title</label>
          <input id="title" type="text" value={this.props.titleValue} onChange={this.props.handleTitle} />

          <label htmlFor="ingredients">Ingredients</label>
          <textarea id="ingredients" value={this.props.ingredientsValue} onChange={this.props.handleIngredients} />

          <label htmlFor="instructions">Instructions</label>
          <textarea id="instructions" value={this.props.instructionsValue} onChange={this.props.handleInstructions} />

          <button onClick={this.props.handleSubmit}>Save</button>
        </form>
      </div>
    );
  }
}

export default RecipeForm;
