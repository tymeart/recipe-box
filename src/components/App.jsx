import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainSection from './MainSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          title: 'Stir-fried green beans',
          ingredients: ['green beans', 'ground meat', 'oyster sauce', 'soy sauce', 'water'],
          instructions: 'Marinate meat with oyster sauce, cut beans, cook meat until medium-rare, add beans with little bit of oyster sauce and soy sauce and water.'
        },
        {
          title: 'Fried egg and onion',
          ingredients: ['eggs', 'yellow onion', 'soy sauce'],
          instructions: 'Beat eggs and add soy sauce to it, chop onion, cook the onion on low heat until golden brownish, add egg on top.'
        }
      ],
      displayRecipe: false,
      displayAllRecipes: false,
      displayForm: false,
    };
  }

  handleRecipeClick = (event) => {
    let recipeTitle = event.target.innerHTML;
    let selectedRecipe = this.state.recipes.filter(recipe => {
      return recipeTitle === recipe.title;
    });
    this.setState({displayRecipe: true});
  }

  // if button is clicked, display form
  handleAddRecipeButtonClick = () => {
    this.setState({
      displayRecipe: false,
      displayForm: true});
  }

  // default and if recipe box heading is clicked, display instructions


  render() {
    return (
      <div className="App">
        <Sidebar
          handleRecipeClick={this.handleRecipeClick}
          recipes={this.state.recipes}
        />
        {this.state.displayRecipe &&
          <MainSection id="main"
            recipe={this.state.recipes[0]}
            // recipeTitle={this.state.recipe[0].title}
            // recipeIngredients={this.state.recipe[0].ingredients}
            // recipeInstructions={this.state.recipe[0].instructions}
          />
        }
      </div>
    );
  }
}

export default App;
