import React, { Component } from 'react';
import RecipeList from './RecipeList';

class Sidebar extends Component {

  render() {
    return (
      <div className="Sidebar">
        <h1>Recipe Box</h1>
        <button onClick={this.props.handleAddRecipeButtonClick}>Add a Recipe</button>
        <RecipeList
          handleRecipeClick={this.props.handleRecipeClick}
          recipes={this.props.recipes}
        />
      </div>
    );
  }
}

export default Sidebar;
