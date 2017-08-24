import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeForm from './RecipeForm';

class MainSection extends Component {
  render() {
    return (
      <main>
        {this.props.recipe && <RecipeDetails recipe={this.props.recipe} />}
        {this.props.displayForm &&
          <RecipeForm
            titleValue={this.props.titleValue}
            ingredientsValue={this.props.ingredientsValue}
            instructionsValue={this.props.instructionsValue}
            handleTitle={this.props.handleTitle}
            handleIngredients={this.props.handleIngredients}
            handleInstructions={this.props.handleInstructions}
            handleSubmit={this.props.handleSubmit}
          />
        }
      </main>
    );
  }
}

export default MainSection;
