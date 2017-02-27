import React, { Component } from 'react';
import {
  Provider
} from 'react-redux'
import configureStore from './store'
import rootSagas from './sagas'
import Root from './containers/Root'

class App extends Component {
  render() {
    const store = configureStore({})
    store.runSaga(rootSagas)
    return (
      <Provider store={store}>
        <Root dispatch={store.dispatch} />
      </Provider>
    );
  }
}

export default App;
