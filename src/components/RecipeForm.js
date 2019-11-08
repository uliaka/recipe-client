import React from 'react';
import { action } from '@storybook/addon-actions';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import PropTypes from 'prop-types';


class RecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.validateForm = this.validateForm.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  validateForm(values)  {
    const errors = {};
    const { type, title, prepTime } = values;
    if (!type) {
      errors.type = 'Type is required'
    
    }
    if (!title) {
      errors.title = 'Title is required'
    }
    if (!prepTime) {
      errors.prepTime = 'Preparation time is required'
    }
    return errors;
  }
  onFormSubmit(values, { setSubmitting }) {
    this.props.onSubmit(values)
  }

  render() {
    const { recipe } = this.props
    return (
      <Card>
        <CardContent>
          <Formik
            initialValues={recipe}
            validate={this.validateForm}
            onSubmit={this.onFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              isSubmitting,
              /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit} >
                  <TextField
                    id="standard"
                    label="Title"
                    helperText=""
                    defaultValue=""
                    margin="normal"
                    value={values.title}
                    onChange={(e) => setFieldValue('title', e.target.value)}
                    error={errors.title && touched.title}
                    helperText={errors.title} 
                  />
                  <TextField
                    id="standard"
                    label="Type"
                    helperText=""
                    defaultValue=""
                    margin="normal"
                    value={values.type}
                    onChange={(e) => setFieldValue('type', e.target.value)}
                    error={errors.type && touched.type}
                    helperText={errors.type}
                  />
                  <TextField
                    id="standard"
                    label="Ingredients"
                    helperText=""
                    defaultValue=""
                    margin="normal"
                  />
                  <TextField
                    id="standard"
                    label="Description"
                    helperText=""
                    defaultValue=""
                    margin="normal"
                  />
                  <TextField
                    id="standard"
                    label="PrepTime"
                    helperText=""
                    defaultValue=""
                    margin="normal"
                    value={values.prepTime}
                    onChange={(e) => setFieldValue('prepTime', e.target.value)}
                    error={errors.prepTime && touched.prepTime}
                    helperText={errors.prepTime}
                  />
                  <button type="submit" disabled={isSubmitting}>Button</button>
                </form>
              )}
          </Formik>
        </CardContent>
      </Card>
     )
   }
}

RecipeForm.propTypes = {
  recipe: PropTypes.object,
  onSubmit: PropTypes.func,
}


export default RecipeForm;