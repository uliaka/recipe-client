import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RecipeDetailsPage from './pages/RecipeDetailsPage.js'
import EditRecipePage from './pages/EditRecipePage.js'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './redux/store.js';
import { Provider } from 'react-redux';


function RouterComponent() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/recipe/details/:id" component={RecipeDetailsPage} />
        <Route exact path="/recipe/edit/:id" component={EditRecipePage} />
      </Switch>
    </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterComponent />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
