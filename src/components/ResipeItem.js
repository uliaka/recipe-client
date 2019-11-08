import React from 'react';
import moment from 'moment'

class Recipe extends React.Component {

  goToDetails(id) {
    this.props.history.push({
      path: `/details`,
      state: id
    });
  }

  render() {
    return (
      <div onClick={() => this.goToDetails(this.props.id)} 
          className="container-recipe">
          <h1>{this.props.title}</h1>
          <p>{moment(this.props.created).format('MMMM Do YYYY, h:mm:ss a')}</p>
      </div>
    );
  }
}


export default Recipe;