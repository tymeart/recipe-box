import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_RECIPE:
      return [
          ...state.recipes,
          {
            id: action.id,
            recipe: action.recipe
          }
      ];
    case types.EDIT_RECIPE:
      const newState = state.filter(recipe => recipe.id !== action.id);
      return [
          ...state.recipes,
          ...newState
      ];
    case types.DELETE_RECIPE:
      return [
        state.recipes.filter(recipe => recipe.id !== action.id)
      ];
    // case types.RECIPE_SELECTED:
    //  return {
        // ...state,
        // displayRecipe: true,
        // displayAddForm: false,
        // displayEditForm: false
      // };
    // case types.DISPLAY_ADD_FORM:
    //   return [
    //     ...state,
    //     {
    //       displayRecipe: false,
    //       displayAddForm: true,
    //       displayEditForm: false
    //     }
    //   ];
    // case types.DISPLAY_EDIT_FORM:
    //   return {
    //     ...state,
    //     displayRecipe: false,
    //     displayAddForm: false,
    //     displayEditForm: true
    //   };
    default:
      return state;
  }
}
