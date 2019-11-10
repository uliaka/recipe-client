import React from 'react';
import SubmitRecipeForm from '../components/SubmitRecipeForm';
import { useDispatch } from 'react-redux';
import types from '../redux/types';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

function EditRecipePage(props) {
  const dispatch = useDispatch();
  const { recipe } = props.history.location.state;

  const goBack = () => props.history.goBack();
  const updateRecipe = (recipe) => {
    return fetch(`http://localhost:3000/recipes/${recipe.id}`, {
      method: 'PUT',
      body: JSON.stringify(recipe),
      headers: {
        'Content-type': 'application/json'
      }
    });
  };
  //update recipe action
  const onSuccess = (recipe) => {
    console.log(types);
    dispatch({ type: types.UPDATE_RECIPE, payload: recipe });
    props.history.go(-1);
  };
  return (
    <>
      <IconButton aria-label="goBack" onClick={goBack}>
        <ArrowBackIcon />
      </IconButton>
      <SubmitRecipeForm
        recipe={recipe}
        request={(data) => updateRecipe(data)}
        onSuccess={(data) => onSuccess(data)}
      />
    </>
  );

}

export default EditRecipePage;