/**
 * Ardityo Giantra
 * agiantra123@gmail.com
 */

 import React, {Component} from 'react';

import { StackNavigator } from 'react-navigation'

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

export default class App extends Component {
  render() {
    return (
      <RootStack /> // There are 2 ways to use stack navigation
    );
  }
}

const RootStack = StackNavigator({
  Login: LoginScreen,
  Home: HomeScreen
})