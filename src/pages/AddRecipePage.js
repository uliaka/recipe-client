import React from 'react';
import SubmitRecipeForm from '../components/SubmitRecipeForm'
import { useDispatch } from 'react-redux'
import types from '../redux/types'

function AddRecipePage(props) {
  const dispatch = useDispatch();     
  const goBack = () => props.history.goBack()
  const addRecipe = (recipe) => {
    return fetch(`http://localhost:3000/recipes/`, {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: {
        'Content-type': 'application/json'
      }
    })
  }
//add recipe action
const onSuccess = (recipe) => {
  dispatch({ type: types.CREATE_RECIPE, payload: recipe })
  props.history.go(-1);
}
return (
    <>
      <button onClick={goBack}>go back</button>
      <SubmitRecipeForm
        recipe={{}}
        request={(data) => addRecipe(data)}
        onSuccess={(data) => onSuccess(data)}
      />
    </>
  )

}

export default AddRecipePage;