import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RecipeDetailsPage from './pages/RecipeDetailsPage.js';
import EditRecipePage from './pages/EditRecipePage.js';
import AddRecipePage from './pages/AddRecipePage.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './redux/store.js';
import { Provider } from 'react-redux';
import Header from './components/Header.js';

function RouterComponent() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/recipe/details/:id" component={RecipeDetailsPage} />
          <Route exact path="/recipe/edit/:id" component={EditRecipePage} />
          <Route exact path="/recipe/create" component={AddRecipePage} />
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
