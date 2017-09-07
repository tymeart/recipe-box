import React, { Component } from 'react';

class EditRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTitle: this.props.titleValue,
      currentIngredients: this.props.ingredientsValue,
      currentInstructions: this.props.instructionsValue
    }
  }

  handleTitleChange = (event) => {
    this.setState({currentTitle: event.target.value});
  }

  handleIngredientsChange = (event) => {
    this.setState({currentIngredients: event.target.value});
  }

  handleInstructionsChange = (event) => {
    this.setState({currentInstructions: event.target.value});
  }

  render() {
    let formData = {
      title: this.state.currentTitle,
      ingredients: this.state.currentIngredients,
      instructions: this.state.currentInstructions
    };

    return (
      <div>
        <h2>Edit Recipe</h2>
        <form>
          <label htmlFor="title">Recipe Title</label>
          <input id="title" type="text" value={this.state.currentTitle} onChange={this.handleTitleChange} />

          <label htmlFor="ingredients">Ingredients</label>
          <textarea id="ingredients" value={this.state.currentIngredients} onChange={this.handleIngredientsChange} />

          <label htmlFor="instructions">Instructions</label>
          <textarea id="instructions" value={this.state.currentInstructions} onChange={this.handleInstructionsChange} />

          <button onClick={this.props.handleEditSubmit.bind(this, formData)}>Save</button>
        </form>
      </div>
    );
  }
}

export default EditRecipeForm;
