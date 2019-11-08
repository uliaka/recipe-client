import React from 'react';
import RecipeForm from '../src/components/RecipeForm.js';
import { storiesOf } from '@storybook/react';
import { recipe } from './initialData'

export default {
  title: 'Resipe form',
};
  
  storiesOf('RecipeForm', module)
    .add('recipe', () => <RecipeForm recipe={recipe} onSubmit={(data) => { console.log('data ', data) }}/>);