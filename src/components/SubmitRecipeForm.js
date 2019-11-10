import React from 'react';
import RecipeForm from './RecipeForm.js';
import PropTypes from 'prop-types';


const styles = {
  errorBlock: {
    textAlign: 'center',
    color: 'red',
  },
  successBlock: {
    textAlign: 'center',
    color: 'green',
  },
  submittingBlock: {
    textAlign: 'center',
    color: 'black',
  }
}


class SubmitRecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      isSubmitting: false,
      error: null,
      success: null,
    };
  }

  onSubmit(values) {
    const { onSuccess, request } = this.props;
    this.setState({ isSubmitting: true, error: null, success: null });
    request(values)
      .then(res => res.json())
      .then((response) => {
        if (response.error) {
          throw new Error(response.error);
          return;
        }
        this.setState({ success: response.message, error: null, isSubmitting: false });
        onSuccess(values);
      }).catch(error => {
        this.setState({ error: error.message, success: null, isSubmitting: false });
      });
  }
  render() {
    const { isSubmitting, error, success } = this.state;
    return (
      <>
        {isSubmitting && <div style={styles.submittingBlock}>submitting...</div>}
        {error && <div style={styles.errorBlock}>{error}</div>}
        {success && <div style={styles.successBlock}>{success}</div>}
        <RecipeForm onSubmit={this.onSubmit} recipe={this.props.recipe} />
      </>
    );
  }
}

SubmitRecipeForm.propTypes = {
  recipe: PropTypes.object,
  request: PropTypes.func,
  onSuccess: PropTypes.func,
};

export default SubmitRecipeForm;