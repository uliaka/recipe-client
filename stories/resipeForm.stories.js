import React from 'react';
import RecipeForm from '../src/components/RecipeForm.js';
import { storiesOf } from '@storybook/react';

export default {
  title: 'Resipe form',
};

const recipe = {
    title: "Soup with pampkin",
    type: "we",
    ingredients: ["medium onion", "medium onion", "medium onion", "medium onion", "medium onion", "1 medium onion", "1 medium onion", "1 medium onion"],
    description: ["Preheat the oven to 375 degrees F (190 degrees C)", "Grease a 1-quart casserole dish", "Slice the potatoes and pumpkin with a mandolin into 1/8-inch thick slices, using the mandolin's 3-millimeter setting", "Place 1/2 of the pumpkin slices on the bottom of the prepared casserole dish", "Season with salt and pepper, add 1/4 of the thyme, and 1/4 of the Gruyere cheese", "Layer 1/2 of the potato slices on top, season with salt and pepper, add 1/4 of the thyme, and 1/4 of the Gruyere. Repeat pumpkin layer and potato layer each one more time, using up remaining seasoning and Gruyere.Pour half and half evenly over the top and cover with aluminum foil", "Bake in the preheated oven for 45 minutes. Remove the foil and continue to bake another 15 minutes, or until potatoes are tender and top is nicely browned", "Remove from oven and let sit for 15 minutes before serving."],
    prepTime: 90,
    createdAt: "November 8th 2019, 2:42:40 pm"
} 
 
  
  storiesOf('RecipeForm', module)
    .add('recipe', () => <RecipeForm recipe={recipe} onSubmit={(data) => { console.log('data ', data) }}/>);