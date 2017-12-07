import initialState from './initialState';
import * from '../actions/actionTypes';

export default recipes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        {
          id: state.id++,
          recipe: action.recipe
        }
      };
    case EDIT_RECIPE:
      const newState = state.filter(recipe => recipe.id !== action.id);
      return {
        ...newState,
        {
          id: action.recipe.id,
          recipe: action.recipe
        }
      };
    case DELETE_RECIPE:
      return state.filter(recipe => recipe.id !== action.id);
    case RECIPE_SELECTED:
      return {
        ...state,
        {
          displayRecipe: true,
          displayAddForm: false,
          displayEditForm: false
        }
      };
    case DISPLAY_ADD_FORM:
      return {
        ...state,
        {
          displayRecipe: false,
          displayAddForm: true,
          displayEditForm: false
        }
      };
    case DISPLAY_EDIT_FORM:
      return {
        ...state,
        {
          displayRecipe: false,
          displayAddForm: false,
          displayEditForm: true
        }
      };
    default:
      return state;
  }
}
