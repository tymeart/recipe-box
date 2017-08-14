import React, { Component } from 'react';
import RecipeList from './RecipeList';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <h1>Recipe Box</h1>
        <button>Add a Recipe</button>
        <RecipeList recipes={this.props.recipes}/>
      </div>
    );
  }
}

export default Sidebar;
