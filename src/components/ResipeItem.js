import React from 'react';
import moment from 'moment'
import { withRouter } from 'react-router-dom';

const Recipe = (props) => {
  const goToRoute = (id) => {
    props.history.push(`recipe/details/${id}`, { id });
  }
  return (
    <div style={{ border: '1px solid black', cursor: 'pointer' }}
      onClick={() => goToRoute(props.data.id)}
      className="container-recipe">
      <h1>{props.data.title}</h1>
      <p>{moment(props.data.created).format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  );
}

export default withRouter(Recipe);
