import React from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import styles from '../styles/index.js';

const recipeItemStyles = {
  cardStyle: {
    margin: '20px 0px', 
    width: '50%',
    cursor: 'pointer',
    textAlign: 'left',
    transition: '0.3s',
    "&:hover": {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    }
  },
  cardHeaderStyle: {
    backgroundColor: styles.blueLite,
    color: 'white',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  subheader: {
    color: 'white'
  }
};

const Recipe = (props) => {
  const goToRoute = (id) => {
    props.history.push(`recipe/details/${id}`, { id });
  };
  const cardTitle = (
    <span>
      <span style={recipeItemStyles.cardTitle}>Title: </span>
      <span>{props.data.title}</span>
    </span>
  );

  const subheader = (
    <span style={recipeItemStyles.subheader}>
      {`Created: ${moment(props.data.created).format('MMMM Do YYYY, h:mm:ss a')}`}
    </span>
  ); 

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Card onClick={() => goToRoute(props.data.id)} style={recipeItemStyles.cardStyle}>
        <CardHeader
          style={recipeItemStyles.cardHeaderStyle}
          title={cardTitle}
          subheader={subheader}
        />
        <CardContent>
          <Typography paragraph><b>Description: </b>{props.data.directions}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default withRouter(Recipe);
