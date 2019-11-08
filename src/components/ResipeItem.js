import React from 'react';
import moment from 'moment'
import { withRouter } from 'react-router-dom';

class Recipe extends React.Component {
   
  goToRoute(recipe) {
    console.log('fsadfadsfsad', recipe)
  debugger
    this.props.history.push(`recipe/details/${recipe.id}`, { recipe });
  }

  render() {
    const { title, created } = this.props.data;
    return (
      <div style={{border: '1px solid black', cursor: 'pointer'}}
         onClick={(e) => this.goToRoute(this.props.data)}  
          className="container-recipe">
          <h1>{title}</h1>
          <p>{moment(created).format('MMMM Do YYYY, h:mm:ss a')}</p>
      </div>
    );
  }
}

export default withRouter(Recipe);
