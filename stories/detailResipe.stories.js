import React from 'react';
import RecipeDetails from '../src/components/RecipeDetails.js';
import { storiesOf } from '@storybook/react';
import { recipe } from './initialData'
export default {
  title: 'Details recipe',
};
  
storiesOf('RecipeDetails', module)
  .add('recipe', () => <RecipeDetails recipe={recipe} />);