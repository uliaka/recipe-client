import React from 'react';
import SubmitRecipeForm from '../components/SubmitRecipeForm'

class EditRecipePage extends React.Component {
  render() {
      debugger;
      const { recipe } = this.props.history.location.state;    
      const goBack = () => this.props.history.goBack()
      return (
          <>
            <button onClick={goBack}>go back</button>
            <SubmitRecipeForm
              recipe={recipe}
              onSubmit={() => {}}
            />
          </>
      )
  }
}

export default EditRecipePage;