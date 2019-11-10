import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

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
  const classes = useStyles();

  return (
    <Card className={classes.card}>
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
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={6}
                >
                  <TextField
                    fullWidth
                    id="standard"
                    label="Title"
                    defaultValue=""
                    margin="normal"
                    value={values.title}
                    onChange={(e) => setFieldValue('title', e.target.value)}
                    error={errors.title && touched.title}
                    helperText={errors.title || ''}
                  />
                  <Grid item xs={12} container direction="row" spacing={2}>
                    <Grid item xs={8}>
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
                    </Grid>
                    <Grid item xs={4}>
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
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
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
                    fullWidth
                    id="standard"
                    label="Description"
                    defaultValue=""
                    margin="normal"
                    value={values.description}
                    onChange={(e) => setFieldValue('description', e.target.value)}
                    error={errors.description && touched.description}
                    helperText={errors.description || ''}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    type="submit" 
                    disabled={isSubmitting}
                  >
                    Save recipe
                  </Button>
                </Grid>
              </form>
            )}
        </Formik>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    padding: 30
  },
  form: {
    width: "100%"
  },
  button: {
    margin: theme.spacing(2),

  },
}))

export default RecipeForm;
