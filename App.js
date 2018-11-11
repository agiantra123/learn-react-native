import React, {Component} from 'react';
import {Text, View} from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import CounterApp from './src/components/CounterApp'

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1}
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1}
  }
  return state
}

const store = createStore(reducer)

export default class App extends Component {
  render() {  {/* ONLY COMPONENTS INSIDE PROVIDER CAN ACCESS STORE/REDUX */}
    return (
       <Provider store={store}> 
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <CounterApp />
        </View>   
      </Provider>
    );
  }
}