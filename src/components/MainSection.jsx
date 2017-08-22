import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';

class MainSection extends Component {
  render() {
    return (
      <main>
        <RecipeDetails
          recipe={this.props.recipe}
          // title={this.props.recipeTitle}
          // ingredients={this.props.recipeIngredients}
          // instructions={this.props.recipeInstructions}
        />
      </main>
    );
  }
}

export default MainSection;
