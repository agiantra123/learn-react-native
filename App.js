import React, {Component} from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './src/store/reducers/rootReducer'

import TodoComponent from './src/components/TodoComponent'

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoComponent />
      </Provider>
    );
  }
}