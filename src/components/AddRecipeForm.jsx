import React, { Component } from 'react';

class AddRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredients: '',
      instructions: ''
    }
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  }

  handleIngredientsChange = (event) => {
    this.setState({ingredients: event.target.value});
  }

  handleInstructionsChange = (event) => {
    this.setState({instructions: event.target.value});
  }


  render() {
    let formData = {
      title: this.state.title,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions
    };

    return (
      <div>
        <h2>Add a New Recipe</h2>
        <form>
          <label htmlFor="title">Recipe Title</label>
          <input id="title" type="text" value={this.state.title} onChange={this.handleTitleChange} />

          <label htmlFor="ingredients">Ingredients</label>
          <textarea id="ingredients" value={this.state.ingredients} onChange={this.handleIngredientsChange} />

          <label htmlFor="instructions">Instructions</label>
          <textarea id="instructions" value={this.state.instructions} onChange={this.handleInstructionsChange} />

          <button onClick={this.props.handleNewRecipeSubmit.bind(this, formData)}>Save</button>
        </form>
      </div>
    );
  }
}

export default AddRecipeForm;
