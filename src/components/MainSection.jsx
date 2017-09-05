import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import AddRecipeForm from './AddRecipeForm';
import EditRecipeForm from './EditRecipeForm';

class MainSection extends Component {
  render() {
    return (
      <main>
        {this.props.recipe &&
          <RecipeDetails
            recipe={this.props.recipe}
            handleEditButtonClick={this.props.handleEditButtonClick}
            handleDelete={this.props.handleDelete}
          />
        }

        {this.props.displayAddRecipeForm &&
          <AddRecipeForm
            titleValue={this.props.titleValue}
            ingredientsValue={this.props.ingredientsValue}
            instructionsValue={this.props.instructionsValue}
            handleTitleChange={this.props.handleTitleChange}
            handleIngredientsChange={this.props.handleIngredientsChange}
            handleInstructionsChange={this.props.handleInstructionsChange}
            handleNewRecipeSubmit={this.props.handleNewRecipeSubmit}
          />
        }

        {this.props.displayEditForm &&
          <EditRecipeForm
            titleValue={this.props.titleValue}
            ingredientsValue={this.props.ingredientsValue}
            instructionsValue={this.props.instructionsValue}
            handleEditSubmit={this.props.handleEditSubmit}
          />
        }
      </main>
    );
  }
}

export default MainSection;
