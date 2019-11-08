import React from 'react';
import ResipeItem from './ResipeItem';
import { connect } from 'react-redux';
import ACTIONS from '../redux/actions.js';

class recipeList extends React.Component {

  componentDidMount() {
    this.props.dispatch(ACTIONS.getRecipes());
  }
  
  render() {
    console.log('props', this.props)
    const { recipes = [] } = this.props;
    return (
        <div className="App">
            Recipes
          <div className="grid-container">
            {recipes.map(recipe => (
              <ResipeItem
                id={recipe.id}
                title={recipe.title}
                created={recipe.createdAt}
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

export default connect(mapStateToProps)(recipeList);