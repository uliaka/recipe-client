import React, { useState } from 'react';
import RecipeDetails from '../components/RecipeDetails';
import { useSelector, useDispatch } from 'react-redux';
import ACTIONS from '../redux/actions';
import Types from '../redux/types';
import AlertDialog from '../components/AlertDialog';
import { apiUrl } from '../config/index.js';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

function RecipeDetailsPage(props) {
  const dispatch = useDispatch();
  const recipeId = parseInt(props.history.location.pathname.split('/').pop());
  const recipe = useSelector(state => state.recipes && state.recipes.find(r => r.id === recipeId)) || {};

  if (!Object.keys(recipe).length) {
    dispatch(ACTIONS.getRecipes());
  }
  const onEdit = () => props.history.push(`/recipe/edit/${recipe.id}`, { recipe });
  const goBack = () => props.history.go(-1);

  const [showModal, setSHowModal] = useState(false);
  const handleModalOpen = () => setSHowModal(true);
  const handleModalClose = () => setSHowModal(false);

  const onDelete = (recipeId) => {
    return fetch(`${apiUrl}${recipeId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => {
        dispatch({
          type: Types.DELETE_RECIPE,
          payload: recipeId
        });
        props.history.go(-1);
      })
      .catch(err => {
        console.log(err);
      });

  };

  return (
    <>
      {showModal &&
        <AlertDialog
          onCancel={handleModalClose}
          onConfirm={() => onDelete(recipeId)}
          confirmText="delete"
          cancelText="cancel"
          message="Are you sure to delete this recipe?"
        />
      }
      <IconButton aria-label="goBack" onClick={goBack}>
        <ArrowBackIcon />
      </IconButton>
      <RecipeDetails
        recipe={recipe}
        onEdit={onEdit}
        onDelete={handleModalOpen}
      />
    </>
  );
}

export default RecipeDetailsPage;