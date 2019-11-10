import ACTIONS from "./actions";

const defaultState = {
  recipes: [],
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_RECIPE: {
      return {
        ...state,
        recipes: state.recipes.concat([action.payload])
      };
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
     return {
       ...state,
       recipes: state.recipes.filter(r => r.id !== action.payload.id)
     }
    
    }

    default:
      return state;
  }
};

export default todoReducer;