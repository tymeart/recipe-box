import initialState from './initialState';
import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from '../actions/actionTypes';

export default recipes = (state = initialState.recipes, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return [
        ...state,
        {
          id: action.id,
          recipe: action.data
        }
      ];
    case EDIT_RECIPE:
      const newState = state.filter(recipe => recipe.id !== action.id);
      return [
        ...newState,
        {
          id: action.id,
          recipe: action.data
        }
       ];
    case DELETE_RECIPE:
      return state.filter(recipe => recipe.id !== action.id);
    default:
      return state;
  }
}
