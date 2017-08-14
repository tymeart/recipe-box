import React, { Component } from 'react';
import RecipeList from './RecipeList';

class Sidebar extends Component {
  render() {
    return (
      <h1>Recipe Box</h1>
      <button>Add a Recipe</button>
      <RecipeList />
    );
  }
}

export default Sidebar;
