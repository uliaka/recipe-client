import React from 'react';
import './App.css';
import RecipeList from './components/RecipeList.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <RecipeList />
        </div>
      </Provider>
    );
  }
}

export default App;
