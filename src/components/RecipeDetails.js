import React from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../redux/actions.js';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => ({
  recipe: state.recipe
});

class RecipeDetails extends React.Component {

 componentDidMount() {
   this.props.dispatch(ACTIONS.getRecipeById(3));
 }
  
  render() {
    console.log("thia.props", this.props.recipe)
    const { recipe = [] } = this.props;
    return (
        <div className="App">
            Recipe
          <div className="grid-container">
            {recipe.map(r => (
              <div>
                <p>{r.title}</p>
                <p>{r.ingredients}</p>
                <p>{r.description}</p>
              </div>
            ))
            }
           <Button variant="contained" color="primary">
            Edit
           </Button>
          </div>
        </div>
    )
  }
}

export default connect(mapStateToProps)(RecipeDetails);