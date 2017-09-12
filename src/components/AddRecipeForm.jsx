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
        <heading className="recipe-heading">
          <h2>Add a New Recipe</h2>
        </heading>
        <form>
          <label htmlFor="title">Recipe Title</label>
          <input id="title" type="text" value={this.state.title} onChange={this.handleTitleChange} />

          <label htmlFor="ingredients">Ingredients</label>
          <p className="quiet">Separate multiple items with a comma and space (e.g. lettuce, tomato, cheese)</p>
          <textarea id="ingredients" value={this.state.ingredients} onChange={this.handleIngredientsChange} />

          <label htmlFor="instructions">Instructions</label>
          <textarea id="instructions" value={this.state.instructions} onChange={this.handleInstructionsChange} />

          <div className="submitOptions">
            <button onClick={this.props.handleNewRecipeSubmit.bind(this, formData)} className="primary">Save</button>
            <button onClick={this.props.handleCancel} className="neutral">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddRecipeForm;
