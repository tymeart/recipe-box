import initialState from './initialState';
import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from '../actions/actionTypes';

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
    default:
      return state;
  }
}
