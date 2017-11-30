import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from './actionTypes';

let todoId = 0;

export const addRecipe = recipe => {
  return {
    type: ADD_RECIPE,
    id: todoId++,
    data: recipe
  }
}

export const editRecipe = (id, recipe) => {
  return {
    type: EDIT_RECIPE,
    id,
    data: recipe
  }
}

export const deleteRecipe = id => {
  return {
    type: DELETE_RECIPE,
    id
  }
}
