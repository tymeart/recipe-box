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
      displayAddRecipeForm: false,
      displayEditForm: false,
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
      displayAddRecipeForm: false,
      displayEditForm: false
    });
  }

  handleAddRecipeButtonClick = (event) => {
    event.preventDefault();
    this.setState({
      displayRecipe: null,
      displayAddRecipeForm: true,
      displayEditForm: false
    });
  }

  handleEditButtonClick = (recipe, event) => {
    event.preventDefault();
    const currentRecipeTitle = recipe[0];
    const currentRecipeDetails = JSON.parse(recipe[1]);
    this.setState({
      displayRecipe: null,
      displayEditForm: true,
      title: currentRecipeTitle,
      ingredients: currentRecipeDetails.ingredients.join(', '),
      instructions: currentRecipeDetails.instructions
    });
  }

  handleNewRecipeSubmit = (formData, event) => {
    event.preventDefault();
    let newRecipeTitle = `_tymeart_recipes_${formData.title}`;
    let newRecipeIngredients = formData.ingredients.split(', ');
    let newRecipeDetails = {
      ingredients: newRecipeIngredients,
      instructions: formData.instructions
    };

    if (localStorage.getItem(newRecipeTitle)) {
      alert('You already have a recipe with that title.');
    } else if (formData.title !== '' && formData.ingredients !== '') {
      localStorage.setItem(newRecipeTitle, JSON.stringify(newRecipeDetails));
      this.updateRecipeState();
    }

    // add message about recipe being saved
  }

  handleEditSubmit = (formData, event) => {
    event.preventDefault();

    const oldRecipeTitle = `_tymeart_recipes_${this.state.title}`;
    localStorage.removeItem(oldRecipeTitle);

    let newRecipeTitle = `_tymeart_recipes_${formData.title}`;
    let newRecipeIngredients = formData.ingredients.split(', ');
    let newRecipeDetails = {
      ingredients: newRecipeIngredients,
      instructions: formData.instructions
    };
    if (formData.title !== '' && formData.ingredients !== '') {
      localStorage.setItem(newRecipeTitle, JSON.stringify(newRecipeDetails));
      this.updateRecipeState();
    }

    // add message about recipe being saved
  }

  handleCancel = (event) => {
    event.preventDefault();
    if (this.state.displayEditForm) {
      const currentRecipeTitle = `_tymeart_recipes_${this.state.title}`;
      const currentRecipe = [this.state.title, localStorage.getItem(currentRecipeTitle)];
      this.setState({
        displayRecipe: currentRecipe,
        displayAddRecipeForm: false,
        displayEditForm: false
      });
    } else {
      this.setState({
        displayAddRecipeForm: false,
        displayEditForm: false
      });
    }
  }

  handleDelete = (recipeTitle, event) => {
    event.preventDefault();
    localStorage.removeItem(`_tymeart_recipes_${recipeTitle}`);
    this.updateRecipeState();
    // maybe add a message "[recipe title] has been deleted"
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
    this.setState({
      recipes: recipeArr,
      displayRecipe: null,
      displayAddRecipeForm: false,
      displayEditForm: false
    });
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
          displayAddRecipeForm={this.state.displayAddRecipeForm}
          displayEditForm={this.state.displayEditForm}
          handleEditButtonClick={this.handleEditButtonClick}
          handleEditSubmit={this.handleEditSubmit}
          handleCancel={this.handleCancel}
          handleDelete={this.handleDelete}
          handleNewRecipeSubmit={this.handleNewRecipeSubmit}
          titleValue={this.state.title}
          ingredientsValue={this.state.ingredients}
          instructionsValue={this.state.instructions}
        />
      </div>
    );
  }
}

export default App;
