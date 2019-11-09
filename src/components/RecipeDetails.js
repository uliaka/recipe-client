import React from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import Grid from '@material-ui/core/Grid';

const RecipeDetails = (props) => (
  <Card>
    <CardHeader
      action={
        <>
          <IconButton aria-label="edit" onClick={props.onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={props.onDelete}>
            <DeleteIcon />
          </IconButton>
        </>
      }
      title={props.recipe.title}
      subheader={props.recipe.createdAt}
    />
    <CardContent>
      <Grid item xs={12} sm container spacing={1}>
        <Grid item>
          <Typography variant="subtitle1">{props.recipe.prepTime} min</Typography>
        </Grid>
        <Grid item>
          <HistoryOutlinedIcon />
        </Grid>
      </Grid>
      <Typography paragraph>Ingredients:</Typography>
      <ul>
        {props.recipe.ingredients}
      </ul>
      <Typography paragraph>Directions:</Typography>
      <ol>
        {props.recipe.description}
      </ol>
    </CardContent>
  </Card>
)

export default RecipeDetails;