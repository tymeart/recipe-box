import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from './actionTypes';

export function addRecipe() {
  return {
    type: ADD_RECIPE,
    data: {}
  }
}

export function editRecipe() {
  return {
    type: EDIT_RECIPE,
    data: {}
  }
}

export function deleteRecipe() {
  return {
    type: DELETE_RECIPE
  }
}
