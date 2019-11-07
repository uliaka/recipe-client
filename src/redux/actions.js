const Types = {
    CREATE_RECIPE: "CREATE_RECIPE",
    GET_RECIPES: "GET_RECIPES",
    DELETE_RECIPE: "DELETE_RECIPE"
  };
  
  const createRecipe = recipe => dispatch => {
    console.log("recipe", recipe)
    fetch(`http://localhost:3000/recipes`, {
      method: 'POST',
      headers: {
        'Content-type': 'multipart/form-data'
      },
    })
    .then(res => res.send(recipe).status(200))
    .then(res => dispatch({
      type: Types.CREATE_RECIPE,
      payload: recipe
    }))
    .catch(err => {
        console.log(err)
    })
  }
  
  const getRecipes = () => dispatch => {
    fetch(`http://localhost:3000/recipes`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(res => dispatch({
      type: Types.GET_RECIPES,
      payload: res.data,
    }))
    .catch(err => {
        console.log(err)
    })
  }

  const deleteRecipe = id => ({
    type: Types.DELETE_RECIPE,
    payload: id
  });
  
  export default {
    createRecipe,
    getRecipes,
    deleteRecipe,
    Types
  };
