import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from './actionTypes';

let todoId = 0;

export const addRecipe = (title, ingredients, instructions) => {
  return {
    type: ADD_RECIPE,
    id: todoId++,
    recipe: {
      title,
      ingredients,
      instructions
    }
  }
}

export const editRecipe = (id, title, ingredients, instructions) => {
  return {
    type: EDIT_RECIPE,
    id,
    recipe: {
      title,
      ingredients,
      instructions
    }
  }
}

export const deleteRecipe = id => {
  return {
    type: DELETE_RECIPE,
    id
  }
}
