import React, { useEffect } from 'react';
import ResipeItem from './ResipeItem';
import { useDispatch, useSelector } from 'react-redux';
import ACTIONS from '../redux/actions.js';
import { Link } from "react-router-dom";

const RecipeList = (props) => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);
  useEffect(() => {
    dispatch(ACTIONS.getRecipes());
  }, [])
  return (
    <>
      <button><Link to='/recipe/create'>add recipe</Link></button>
      <div className="App">
        Recipes
        <div className="grid-container">
          {recipes.map(recipe => (
            <ResipeItem
              data={recipe}
              key={recipe.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default RecipeList;