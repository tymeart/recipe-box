import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainSection from './MainSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'recipes': [
        {
          'title': 'Stir-fried green beans',
          'ingredients': ['green beans', 'ground meat', 'oyster sauce', 'soy sauce', 'water']
        },
        {
          'title': 'Fried egg and onion',
          'ingredients': ['eggs', 'yellow onion', 'soy sauce']
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Sidebar
          handleRecipeClick={this.handleRecipeClick}
          recipes={this.state.recipes}
        />
        <MainSection id="main" content={this.state.currentRecipe}/>
      </div>
    );
  }
}

export default App;
