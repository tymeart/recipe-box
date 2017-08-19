import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';

class MainSection extends Component {
  render() {
    return (
      <main>
        <RecipeDetails
          title={this.props.recipeTitle}
          ingredients={this.props.recipeIngredients}
        />
      </main>
    );
  }
}

export default MainSection;
