import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '@material-ui/core/Button';
import { storiesOf } from '@storybook/react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LabelImportantTwoToneIcon from '@material-ui/icons/LabelImportantTwoTone';

export default {
  title: 'Details recipe',
};


class RecipeDetails extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        recipe: {
            "title": "Soup with pampkin",
            "type": "we",
            "ingredients": ["medium onion", "medium onion", "medium onion", "medium onion", "medium onion", "1 medium onion", "1 medium onion", "1 medium onion"],
            "description": ["Preheat the oven to 375 degrees F (190 degrees C)", "Grease a 1-quart casserole dish", "Slice the potatoes and pumpkin with a mandolin into 1/8-inch thick slices, using the mandolin's 3-millimeter setting", "Place 1/2 of the pumpkin slices on the bottom of the prepared casserole dish", "Season with salt and pepper, add 1/4 of the thyme, and 1/4 of the Gruyere cheese", "Layer 1/2 of the potato slices on top, season with salt and pepper, add 1/4 of the thyme, and 1/4 of the Gruyere. Repeat pumpkin layer and potato layer each one more time, using up remaining seasoning and Gruyere.Pour half and half evenly over the top and cover with aluminum foil", "Bake in the preheated oven for 45 minutes. Remove the foil and continue to bake another 15 minutes, or until potatoes are tender and top is nicely browned", "Remove from oven and let sit for 15 minutes before serving."],
            "prepTime": 90,
            "createdAt": "November 8th 2019, 2:42:40 pm"
        }
      }
    }

    render() {
        const { recipe } = this.state
        return (
            <Card>
              <CardHeader
                action={
                <IconButton aria-label="edit" onClick={action('edit')}>
                    <EditIcon />
                </IconButton>
               }
               title={recipe.title}
               subheader={recipe.createdAt}
               
             />
            <CardContent>
              <Grid item xs={12} sm container spacing={1}>
               <Grid item>
                 <Typography variant="subtitle1">{recipe.prepTime} min</Typography>
                </Grid>
                <Grid item>
                  <HistoryOutlinedIcon />
                </Grid>
              </Grid>
              <Typography paragraph>Ingredients:</Typography>
              <ul>
                 {recipe.ingredients.map(i => (
                  <li>
                  {i}
                  </li>
                  ))}
                </ul>
               <Typography paragraph>Directions:</Typography>
               <ol>
                 {recipe.description.map(d => (
                  <li>
                  {d}
                  </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          )
    }
  }
  
  storiesOf('RecipeDetails', module)
    .add('recipe', () => <RecipeDetails />);
  
