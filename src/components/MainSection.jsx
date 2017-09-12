import React, { Component } from 'react';
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
              handleEditButtonClick={this.props.handleEditButtonClick}
            />
          }
        </CSSTransitionGroup>

        <CSSTransitionGroup
          transitionName="recipeForm"
          transitionEnterTimeout={1200}
          transitionLeaveTimeout={500}
        >
          {this.props.displayAddRecipeForm &&
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
              handleEditSubmit={this.props.handleEditSubmit}
              handleDelete={this.props.handleDelete}
              handleCancel={this.props.handleCancel}
            />
          }
        </CSSTransitionGroup>
      </main>
    );
  }
}

export default MainSection;
