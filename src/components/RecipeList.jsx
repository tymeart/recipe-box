import React, { Component } from 'react';

class RecipeList extends Component {
  render() {
    return (
      <ul>
        {this.props.recipes.map(recipe => <li>{recipe.title}</li>)}
      </ul>
    );
  }
}

export default RecipeList;
