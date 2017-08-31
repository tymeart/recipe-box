import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainSection from './MainSection';
import storageAvailable from '../storageAvailable';

let initialRecipes = [
  {
    title: 'Stir-fried green beans',
    ingredients: ['green beans', 'ground meat', 'oyster sauce', 'soy sauce', 'water'],
    instructions: '1. Marinate meat with oyster sauce.\n2. Cut beans.\n3. Cook meat until medium-rare.\n4. Add beans with little bit of oyster sauce, soy sauce, and water.'
  },
  {
    title: 'Fried egg and onion',
    ingredients: ['eggs', 'yellow onion', 'soy sauce'],
    instructions: '1. Beat eggs and add soy sauce to it.\n2. Chop onion.\n3. Cook the onion on low heat until golden brown.\n4. Add egg mixture on top.'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      displayRecipe: null,
      displayForm: false,
      title: '',
      ingredients: '',
      instructions: ''
    };
  }

  handleRecipeClick = (event) => {
    let recipeTitle = event.target.innerHTML;
    let selectedRecipe = this.state.recipes.filter(recipe => {
      return recipeTitle === recipe[0];
    });
    this.setState({
      displayRecipe: selectedRecipe[0],
      displayForm: false
    });
  }

  handleAddRecipeButtonClick = (event) => {
    event.preventDefault();
    this.setState({
      displayRecipe: null,
      displayForm: true
    });
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  }

  handleIngredientsChange = (event) => {
    this.setState({ingredients: event.target.value});
  }

  handleInstructionsChange = (event) => {
    this.setState({instructions: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newRecipeTitle = `_tymeart_recipes_${this.state.title}`;
    let newRecipeIngredients = this.state.ingredients.split(', ');
    let newRecipeDetails = {
      ingredients: newRecipeIngredients,
      instructions: this.state.instructions
    };
    if (localStorage.getItem(newRecipeTitle)) {
      alert('You already have a recipe with that title.');
    } else if (this.state.title !== '' && this.state.ingredients !== '') {
      localStorage.setItem(newRecipeTitle, JSON.stringify(newRecipeDetails));
      this.updateRecipeState();
    }
  }

  updateRecipeState = () => {
    let titles = [];
    let recipeArr = [];
    for (let j = 0; j < localStorage.length; j++) {
      titles[j] = localStorage.key(j).slice(17);
    }
    for (let k = 0; k < titles.length; k++) {
      recipeArr.push([titles[k], localStorage.getItem(`_tymeart_recipes_${titles[k]}`)]);
    }
    this.setState({recipes: recipeArr});
  }

  componentWillMount() {
    if (storageAvailable('localStorage')) {
      if (localStorage.length === 0) {
        // first visit
        for (let i = 0; i < initialRecipes.length; i++) {
          let recipeTitle = `_tymeart_recipes_${initialRecipes[i].title}`;
          let recipeDetails = {
            ingredients: initialRecipes[i].ingredients,
            instructions: initialRecipes[i].instructions
          };
          localStorage.setItem(recipeTitle, JSON.stringify(recipeDetails));
        }
        this.updateRecipeState();
      } else {
        // subsequent visits
        this.updateRecipeState();
      }
    } else {
      alert('Your browser\'s localStorage must be enabled in order to save recipes.');
    }
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          handleRecipeClick={this.handleRecipeClick}
          handleAddRecipeButtonClick={this.handleAddRecipeButtonClick}
          recipes={this.state.recipes}
        />
        <MainSection id="main"
          recipe={this.state.displayRecipe}
          displayForm={this.state.displayForm}
          titleValue={this.state.title}
          ingredientsValue={this.state.ingredients}
          instructionsValue={this.state.instructions}
          handleTitleChange={this.handleTitleChange}
          handleIngredientsChange={this.handleIngredientsChange}
          handleInstructionsChange={this.handleInstructionsChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
