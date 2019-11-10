import React from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/index.js';

const RecipeDetails = (props) => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    maxWidht="500"
  >
    <Card style={{ maxWidth: '500px' }}>
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
        subheader={moment(props.recipe.created).format('MMMM Do YYYY, h:mm:ss a')}
      />
      <CardContent style={{ borderTop: "1px solid", borderColor: styles.blue}} >
        <Grid item xs={12} container spacing={1} style={{ marginBottom: '10px'}}>
          <Grid item>
            <Typography variant="subtitle1">{props.recipe.prepTime} min</Typography>
          </Grid>
          <Grid item>
            <HistoryOutlinedIcon />
          </Grid>
        </Grid>
        <Typography paragraph >Ingredients:</Typography>
        <ul>
          {props.recipe.ingredients}
        </ul>
        <Typography paragraph>Directions:</Typography>
        <ol>
          {props.recipe.description}
        </ol>
      </CardContent>
    </Card>
  </Grid>
)

export default RecipeDetails;