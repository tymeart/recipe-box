import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeForm from './RecipeForm';

class MainSection extends Component {
  render() {
    return (
      <main>
        {this.props.recipe && <RecipeDetails recipe={this.props.recipe} />}
        {this.props.displayForm && <RecipeForm />}
      </main>
    );
  }
}

export default MainSection;
