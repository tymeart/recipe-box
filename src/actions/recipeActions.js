import * as types from './actionTypes';

let nextRecipeId = 0;
export const addRecipe = recipe => {
  return {
    type: types.ADD_RECIPE,
    id: nextRecipeId++,
    recipe
  }
}

export const editRecipe = id => {
  return {
    type: types.EDIT_RECIPE,
    id
  }
}

export const deleteRecipe = id => {
  return {
    type: types.DELETE_RECIPE,
    id
  }
}

// export const selectRecipe = id => {
//   return {
//     type: types.RECIPE_SELECTED,
//     id
//   }
// }

// export const displayAddForm = () => {
//   return {
//     type: types.DISPLAY_ADD_FORM
//   }
// }
//
// export const displayEditForm = id => {
//   return {
//     type: types.DISPLAY_EDIT_FORM,
//     id
//   }
// }
