import React from 'react';
import RecipeDetails from '../components/RecipeDetails'

class RecipeDetailsPage extends React.Component {
  render() {
      debugger;
      const { recipe } = this.props.history.location.state;    
      const onEdit = () => this.props.history.push(`/recipe/edit/${recipe.id}`, { recipe })
      return (
          <RecipeDetails
            recipe={recipe}
            onEdit={onEdit}
            />
      )
  }
}

export default RecipeDetailsPage;