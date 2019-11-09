import React from 'react';
import RecipeDetails from '../components/RecipeDetails'
import { useSelector, useDispatch } from 'react-redux'
import ACTIONS from '../redux/actions';
import Types from '../redux/types'

function RecipeDetailsPage (props) {
  const dispatch = useDispatch()
  const recipeId = parseInt(props.history.location.pathname.split('/').pop())
  const recipe = useSelector(state => state.recipes && state.recipes.find(r => r.id === recipeId)) || {}  
  
  if (!Object.keys(recipe).length) {
    dispatch(ACTIONS.getRecipes());
  }
  const onEdit = () => props.history.push(`/recipe/edit/${recipe.id}`, { recipe })
  const goBack = () => props.history.go(-1) 
  const onDelete = (recipeId) => {
    return fetch(`http://localhost:3000/recipes/${recipeId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => { 
      dispatch({
        type: Types.DELETE_RECIPE,
        payload: recipeId
      })
      props.history.go(-1); 
    })
    .catch(err => {
        console.log(err)
    })
  }
  return (
    <>
      <button onClick={goBack}>go back</button>
      <RecipeDetails
        recipe={recipe}
        onEdit={onEdit}
        onDelete={() => onDelete(recipeId)}
      />
    </>
  )
}

export default RecipeDetailsPage;