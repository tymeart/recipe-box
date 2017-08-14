import React, { Component } from 'react';
import Sidebar from './Sidebar';
import RecipeDetails from './RecipeDetails';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'recipes': [
        {
          'title': 'Stir-fried green beans',
          'ingredients': 'green beans, ground meat, oyster sauce, soy sauce, water'
        },
        {
          'title': 'Fried egg and onion',
          'ingredients': 'eggs, yellow onion, soy sauce'
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Sidebar recipes={this.state.recipes}/>
        {/* <RecipeDetails /> */}
      </div>
    );
  }
}

export default App;
