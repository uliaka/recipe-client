import React from 'react';
import { action } from '@storybook/addon-actions';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import Grid from '@material-ui/core/Grid';

class RecipeDetails extends React.Component {
  render() {
      const { recipe, onEdit, onDelete } = this.props;
      return (
          <Card>
            <CardHeader
            action={
              <>
                <IconButton aria-label="edit" onClick={onEdit}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={onDelete}>
                  <DeleteIcon />
                </IconButton>
              </>
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
               {recipe.ingredients}
              </ul>
             <Typography paragraph>Directions:</Typography>
             <ol>
               {recipe.description}
              </ol>
            </CardContent>
          </Card>
        )
  }
}

export default RecipeDetails;