import recipeReducer from '../../redux/reducers.js'
import types from '../../redux/types.js';

let state = {
  recipes: [],
}

test('should add recipe properly', () => {
  const addRecipeAction = {
    type: types.CREATE_RECIPE,
    payload: {
      title: 'recipe 1',
      description: 'recipe description',
      id: 1,
    },
  }
  state = recipeReducer(state, addRecipeAction)
  expect(state.recipes).toHaveLength(1);
});

test('should update recipe properly', () => {
  const addRecipeAction = {
    type: types.CREATE_RECIPE,
    payload: {
      title: 'recipe 2',
      description: 'recipe description',
      id: 2,
    },
  }
  state = recipeReducer(state, addRecipeAction)
  const newTitle = 'recipe 21'
  const updatedState = recipeReducer(state, {
    type: types.UPDATE_RECIPE,
    payload: {
      title: newTitle,
      description: 'recipe description',
      id: 2,
    },
  })
  const updatedRecipe = updatedState.recipes.find(r => r.id === 2)
  expect(updatedRecipe.title).toEqual(newTitle)
});

test('should delete recipe properly', () => {
  state = recipeReducer(state, {
    type: types.DELETE_RECIPE,
    payload: {
      id: 2,
    },
  })
  expect(state.recipes).toHaveLength(1);
});
