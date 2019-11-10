import React from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
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
        subheader={
          <>
            {moment(props.recipe.created).format('MMMM Do YYYY, h:mm:ss a')}
            <Grid container spacing={1} style={{ marginBottom: '10px', color: 'black', marginTop: '10px' }}>
              <Grid item>
                <Typography variant="subtitle1" style={{ border: '1px', color: "white", backgroundColor: styles.blue, borderRadius: 50, padding: 5, marginRight: 20 }}>
                  Cook time: {props.recipe.prepTime} min 
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" style={{ border: '1px solid', borderColor: styles.blue, borderRadius: 50, padding: 5 }}>{props.recipe.type}</Typography>
              </Grid>
            </Grid>
          </>
        }
      />
      <CardContent>
        <Typography paragraph style={{ borderBottom: "1px solid", borderColor: styles.blue }}>Ingredients:</Typography>
        <ul>
          {props.recipe.ingredients}
        </ul>
        <Typography paragraph style={{ borderBottom: "1px solid", borderColor: styles.blue }}>Directions:</Typography>
        <ol>
          {props.recipe.directions}
        </ol>
      </CardContent>
    </Card>
  </Grid>
);

export default RecipeDetails;
