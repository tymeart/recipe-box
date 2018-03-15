import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions';
import RecipeDetails from './RecipeDetails';
import AddRecipeForm from './AddRecipeForm';
import EditRecipeForm from './EditRecipeForm';
import { CSSTransitionGroup } from 'react-transition-group';

class MainSection extends Component {
  render() {
    return (
      <main>
        <CSSTransitionGroup
          transitionName="recipeDetails"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={400}
        >
          {this.props.recipe &&
            <RecipeDetails
              recipe={this.props.recipe}
              handleEditButtonClick={this.props.displayEditForm}
            />
          }
        </CSSTransitionGroup>

        <CSSTransitionGroup
          transitionName="recipeForm"
          transitionEnterTimeout={1200}
          transitionLeaveTimeout={500}
        >
          {this.props.displayAddForm &&
            <AddRecipeForm
              handleNewRecipeSubmit={this.props.handleNewRecipeSubmit}
              handleCancel={this.props.handleCancel}
            />
          }
        </CSSTransitionGroup>

        <CSSTransitionGroup
          transitionName="editForm"
          transitionEnterTimeout={1200}
          transitionLeaveTimeout={500}
        >
          {this.props.displayEditForm &&
            <EditRecipeForm
              titleValue={this.props.titleValue}
              ingredientsValue={this.props.ingredientsValue}
              instructionsValue={this.props.instructionsValue}
              handleEditSubmit={this.props.editRecipe}
              handleDelete={this.props.deleteRecipe}
              handleCancel={this.props.handleCancel}
            />
          }
        </CSSTransitionGroup>
      </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
