import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import styles from '../styles/index.js';
import PostAddTwoToneIcon from '@material-ui/icons/PostAddTwoTone';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: styles.blue }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
               Recipes
            </Link>
            <Link to='/recipe/create' style={{ textDecoration: 'none', color: 'white', position: 'absolute', right: 10 }}>
              <PostAddTwoToneIcon fontSize='large'/>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}