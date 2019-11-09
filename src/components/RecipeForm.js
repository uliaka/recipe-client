import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';

const RecipeForm = (props) => {
  const validateForm = (values) => {
    const errors = {};
    const { type, title, ingredients, description, prepTime } = values;
    if (!type) {
      errors.type = 'Type is required'
    }
    if (!title) {
      errors.title = 'Title is required'
    }
    if (!ingredients) {
      errors.ingredients = 'Ingredients is required'
    }
    if (!prepTime) {
      errors.prepTime = 'Preparation time is required'
    }
    if (!description) {
      errors.description = 'Description is required'
    }
    return errors;
  }
  const onFormSubmit = (values) => {
    props.onSubmit(values)
  }
  return (
    <Card>
      <CardContent>
        <Formik
          initialValues={props.recipe}
          validate={values => validateForm(values)}
          onSubmit={values => onFormSubmit(values)}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue,
            isSubmitting,
          }) => (
              <form onSubmit={handleSubmit} >
                <TextField
                  id="standard"
                  label="Title"
                  defaultValue=""
                  margin="normal"
                  value={values.title}
                  onChange={(e) => setFieldValue('title', e.target.value)}
                  error={errors.title && touched.title}
                  helperText={errors.title || ''}
                />
                <TextField
                  id="standard"
                  label="Type"
                  defaultValue=""
                  margin="normal"
                  value={values.type}
                  onChange={(e) => setFieldValue('type', e.target.value)}
                  error={errors.type && touched.type}
                  helperText={errors.type || ''}
                />
                <TextField
                  id="standard"
                  label="Ingredients"
                  defaultValue=""
                  margin="normal"
                  value={values.ingredients}
                  onChange={(e) => setFieldValue('ingredients', e.target.value)}
                  error={errors.ingredients && touched.ingredients}
                  helperText={errors.ingredients || ''}
                />
                <TextField
                  id="standard"
                  label="Description"
                  defaultValue=""
                  margin="normal"
                  value={values.description}
                  onChange={(e) => setFieldValue('description', e.target.value)}
                  error={errors.description && touched.description}
                  helperText={errors.description || ''}
                />
                <TextField
                  id="standard"
                  label="PrepTime"
                  defaultValue=""
                  margin="normal"
                  value={values.prepTime}
                  onChange={(e) => setFieldValue('prepTime', e.target.value)}
                  error={errors.prepTime && touched.prepTime}
                  helperText={errors.prepTime || ''}
                />
                <button type="submit" disabled={isSubmitting}>Button</button>
              </form>
            )}
        </Formik>
      </CardContent>
    </Card>
  )
}

export default RecipeForm;
