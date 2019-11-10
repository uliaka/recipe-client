import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import styles from '../styles/index';

const RecipeForm = (props) => {
  const validateForm = (values) => {
    const errors = {};
    const { type, title, ingredients, description, directions, prepTime } = values;
    if (!type) {
      errors.type = 'Type is required';
    }
    if (!title) {
      errors.title = 'Title is required';
    }
    if (!ingredients) {
      errors.ingredients = 'Ingredients is required';
    }
    if (!prepTime) {
      errors.prepTime = 'Preparation time is required';
    } else if (!/^[0-9]{1,}$/i.test(prepTime)) {
      errors.prepTime = 'Preparation time should be number';
    }
    if (!description) {
      errors.description = 'Description is required';
    }
    if (!directions) {
      errors.directions = 'Directions is required';
    }
    return errors;
  };
  const onFormSubmit = (values) => {
    props.onSubmit(values);
  };
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
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
                <Grid item xs={12} container direction="row" spacing={1}>
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
                  label="Directions"
                  defaultValue=""
                  margin="normal"
                  value={values.directions}
                  onChange={(e) => setFieldValue('directions', e.target.value)}
                  error={errors.description && touched.directions}
                  helperText={errors.directions || ''}
                />
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
                  color={styles.blue}
                  size="small"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                  type="submit"
                  disabled={isSubmitting}
                >
                    Save recipe
                </Button>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    padding: 30
  },
  button: {
    marginTop: 20,
  },
});

export default RecipeForm;
