import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from './actionTypes';

export const addRecipe = recipe => {
  return {
    type: ADD_RECIPE,
    recipe
  }
}

export const editRecipe = id => {
  return {
    type: EDIT_RECIPE,
    id
  }
}

export const deleteRecipe = id => {
  return {
    type: DELETE_RECIPE,
    id
  }
}
