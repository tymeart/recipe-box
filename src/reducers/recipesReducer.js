import initialState from './initialState';
import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from '../actions/actionTypes';

export default recipes = (state = initialState.recipes, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return [...state, action.data];
    case EDIT_RECIPE:
      return [...state, action.data];
    case DELETE_RECIPE:
      // filter state by recipe id
      return action;
    default:
      return state;
  }
}
