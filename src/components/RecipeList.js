import React, { useEffect } from 'react';
import ResipeItem from './ResipeItem';
import { useDispatch, useSelector } from 'react-redux';
import ACTIONS from '../redux/actions.js';

const RecipeList = (props) => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes) || [];
  useEffect(() => {
    dispatch(ACTIONS.getRecipes());
  }, []);
  return (
    <>
      <div>
        <h1>My recipes</h1>
        <div>
          {recipes.map(recipe => (
            <ResipeItem
              data={recipe}
              key={recipe.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipeList;