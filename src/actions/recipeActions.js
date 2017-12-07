import * from './actionTypes';

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

export const displayRecipe = id => {
  return {
    type: DISPLAY_RECIPE,
    id
  }
}

export const displayAddForm = () => {
  return {
    type: DISPLAY_ADD_FORM
  }
}

export const displayEditForm = id => {
  return {
    type: DISPLAY_EDIT_FORM,
    id
  }
}
