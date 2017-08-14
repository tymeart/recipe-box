import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import RecipeDetails from './RecipeDetails';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <RecipeDetails />
      </div>
    );
  }
}

export default App;
