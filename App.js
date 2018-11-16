import React, {Component} from 'react';
import {AsyncStorage} from 'react-native'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

// For Redux Persist
import {persistStore, persistReducer} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

// For RN Debugger
import {createLogger} from 'redux-logger' 
import {composeWithDevTools} from 'redux-devtools-extension' 

import rootReducer from './src/store/reducers/rootReducer'
import Input from './src/containers/Input'

// For Redux Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // stateReconciler: autoMergeLevel1 // Default
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// For RN Debugger
const middlewares = []
if (__DEV__){
  middlewares.push(createLogger()) // Using RN Debugger
}

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares))) // For RN Debugger composeWithDevTools

// For Redux Persist
const persistor = persistStore(store)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Input />
        </PersistGate>
      </Provider>
    );
  }
}