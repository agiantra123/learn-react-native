import React, {Component} from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import rootReducer from './src/store/reducers/rootReducer'
import ShopCartApp from './src/ShopCartApp'

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ShopCartApp />
      </Provider>
    );
  }
}