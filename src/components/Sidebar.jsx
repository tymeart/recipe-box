import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeList from './RecipeList';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <h1>Recipe Box</h1>
        <button onClick={this.props.handleAddRecipeButtonClick}>Add a Recipe</button>
        <RecipeList
          handleRecipeClick={this.props.handleRecipeClick}
          recipes={this.props.recipes}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    recipeActions: bindActionCreators(recipeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
