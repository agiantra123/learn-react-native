import React, {Component} from 'react';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import {createLogger} from 'redux-logger' // Using RN Debugger
import {composeWithDevTools} from 'redux-devtools-extension' // Using RN Debugger

import rootReducer from './src/store/reducers/rootReducer'
import Input from './src/containers/Input'

const middlewares = []

if (__DEV__){
  middlewares.push(createLogger()) // Using RN Debugger
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Input />
      </Provider>
    );
  }
}