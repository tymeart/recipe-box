import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainSection from './MainSection';
import storageAvailable from '../storageAvailable';

let initialRecipes = [
  {
    title: 'Stir-fried green beans',
    ingredients: ['green beans', 'ground meat', 'oyster sauce', 'soy sauce', 'water'],
    instructions: 'Marinate meat with oyster sauce, cut beans, cook meat until medium-rare, add beans with little bit of oyster sauce and soy sauce and water'
  },
  {
    title: 'Fried egg and onion',
    ingredients: ['eggs', 'yellow onion', 'soy sauce'],
    instructions: 'Beat eggs and add soy sauce to it, chop onion, cook the onion on low heat until golden brownish, add egg on top.'
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

  handleTitle = (event) => {
    this.setState({title: event.target.value});
  }

  handleIngredients = (event) => {
    this.setState({ingredients: event.target.value});
  }

  handleInstructions = (event) => {
    this.setState({instructions: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newRecipeTitle = `_tymeart_recipes_${this.state.title}`;
    let newRecipeDetails = {
      ingredients: this.state.ingredients,
      instructions: this.state.instructions
    };
    // make sure all fields are filled
    // make sure title is unique
    if (localStorage.getItem(newRecipeTitle)) {
      alert('You already have a recipe with that title.');
    } else {
      // sanitize
      // save recipe into localStorage
      localStorage.setItem(newRecipeTitle, newRecipeDetails);
      // update this.state.recipes with new recipe
    }
  }

  componentWillMount() {
    if (storageAvailable('localStorage')) {
      if (!localStorage.getItem('initialLoad')) {
        // first visit
        localStorage.setItem('initialLoad', 'true');

        for (let i = 0; i < initialRecipes.length; i++) {
          let recipeTitle = `_tymeart_recipes_${initialRecipes[i].title}`;
          let recipeDetails = {
            ingredients: initialRecipes[i].ingredients,
            instructions: initialRecipes[i].instructions
          };
          localStorage.setItem(recipeTitle, JSON.stringify(recipeDetails));
        }

        let titles = [];
        let recipeArr = [];
        for (let j = 0; j < localStorage.length; j++) {
          titles[j] = localStorage.key(j).slice(17);
        }
        for (let k = 0; k < titles.length; k++) {
          recipeArr.push([titles[k], JSON.parse(localStorage.getItem(titles[k]))]);
        }
        this.setState({recipes: recipeArr});
      } else {
        // subsequent visits
        // localStorage.removeItem('initialLoad');
        // make an array of all the recipes within storage
        let titles = [];
        let recipeArr = [];
        for (let j = 0; j < localStorage.length; j++) {
          titles[j] = localStorage.key(j).slice(17);
        }
        for (let k = 0; k < titles.length; k++) {
          recipeArr.push([titles[k], JSON.parse(localStorage.getItem(`_tymeart_recipes_${titles[k]}`))]);
        }
        this.setState({recipes: recipeArr});
      }
    } else {
      alert('This app requires your browser\'s localStorage to be enabled in order to save recipes.');
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
          handleTitle={this.handleTitle}
          handleIngredients={this.handleIngredients}
          handleInstructions={this.handleInstructions}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
