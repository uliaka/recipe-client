import ACTIONS from "./actions";
import _ from "lodash";
import actions from "./actions";

const defaultState = {
  recipes: [],
  recipe: []
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_RECIPE: {
      let newRecipe = action.payload
      let newState = state.concat([newRecipe])
      return newState;
    }

    case ACTIONS.Types.GET_RECIPES: {
      return {
        ...state,
        recipes: action.payload
      }
    }

    case ACTIONS.Types.UPDATE_RECIPE: { 
      return {
        ...state,
        recipes: state.recipes.map(recipe => recipe.id === action.payload.id ? action.payload : recipe),
      }
    }
    
    case ACTIONS.Types.GET_RECIPE_BY_ID: {
      return {
      recipe: action.payload
      }
    }

    case ACTIONS.Types.DELETE_RECIPE: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState.recipes, { id: action.payload });
      newState.recipes.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;