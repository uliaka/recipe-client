import React from 'react';
import ResipeItem from './ResipeItem';
import { connect } from 'react-redux';
import ACTIONS from '../redux/actions.js';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class RecipeList extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(ACTIONS.getRecipes());
  }

  render() {
    const { recipes = [] } = this.props;
    return (
        <div className="App">
            Recipes
          <div className="grid-container">
            {recipes.map(recipe => (
                 <ResipeItem
                   data={recipe}
                   key={recipe.id}
                   />

            ))
            }
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
});

export default connect(mapStateToProps)(RecipeList);