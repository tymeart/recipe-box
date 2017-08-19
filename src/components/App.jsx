import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainSection from './MainSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          'title': 'Stir-fried green beans',
          'ingredients': ['green beans', 'ground meat', 'oyster sauce', 'soy sauce', 'water']
        },
        {
          'title': 'Fried egg and onion',
          'ingredients': ['eggs', 'yellow onion', 'soy sauce']
        }
      ],
      display: null
    };
  }

  handleRecipeClick = (event) => {
    let recipeTitle = event.target.innerHTML;
    let selectedRecipe = this.state.recipes.filter(recipe => {
      return recipeTitle === recipe.title;
    });
    this.setState({display: selectedRecipe[0]});
  }

  // if button is clicked, display form
  handleAddRecipeButtonClick = (event) => {

  }

  // default and if recipe box heading is clicked, display instructions


  render() {
    return (
      <div className="App">
        <Sidebar
          handleRecipeClick={this.handleRecipeClick}
          recipes={this.state.recipes}
        />
        {this.state.display !== null &&
          <MainSection id="main"
          recipeTitle={this.state.display.title}
          recipeIngredients={this.state.display.ingredients}
        />}
      </div>
    );
  }
}

export default App;
