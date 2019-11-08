import ACTIONS from "./actions";
import _ from "lodash";

const defaultState = {
  recipes: [],
  recipe: []
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_RECIPE: {
      console.log(action);
      let newRecipe = action.payload
      let newState = state.concat([newRecipe])
      //let newState = _.cloneDeep(state);
     // newState.recipes.push(newRecipe);
      return newState;
    }

    case ACTIONS.Types.GET_RECIPES: {
      return {
        ...state,
        recipes: action.payload
      }
    }
    

    case ACTIONS.Types.GET_RECIPE_BY_ID: {
      console.log("action.payload", action.payload)
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