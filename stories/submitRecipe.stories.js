import React from 'react';
import SubmitRecipeForm from '../src/components/SubmitRecipeForm.js';
import { storiesOf } from '@storybook/react';
import { recipe } from './initialData'
export default {
  title: 'Submit Resipe form',
};

const request = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ message: 'updated!' });
  }, 400);
});

const onSuccess = () => {
  console.log('redirecting...')
};
  
storiesOf('SubmitRecipeForm', module)
  .add('recipe', () => <SubmitRecipeForm onSuccess={onSuccess} request={request} recipe={recipe} />);