import React from 'react';
import RecipeDetails from '../components/RecipeDetails'
import { useSelector, useDispatch } from 'react-redux'
import ACTIONS from '../redux/actions';

function RecipeDetailsPage (props) {
  const dispatch = useDispatch()
  const recipeId = parseInt(props.history.location.pathname.split('/').pop())
  const recipe = useSelector(state => state.recipes && state.recipes.find(r => r.id === recipeId)) || {}  
  
  if (!Object.keys(recipe).length) {
    dispatch(ACTIONS.getRecipes());
  }
  const onEdit = () => props.history.push(`/recipe/edit/${recipe.id}`, { recipe })
  const goBack = () => props.history.go(-1)
  return (
    <>
      <button onClick={goBack}>go back</button>
      <RecipeDetails
        recipe={recipe}
        onEdit={onEdit}
      />
    </>
  )
}

export default RecipeDetailsPage;