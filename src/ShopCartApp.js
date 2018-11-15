import React, { Component } from 'react'

import {createStackNavigator} from 'react-navigation'

import BookScreen from './containers/BookScreen'
import CartScreen from './containers/CartScreen'
import ElectronicScreen from './containers/ElectronicScreen'
import HomeScreen from './containers/HomeScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'

export default class ShopCartApp extends Component {
  render() {
    return (
      <AppStackNavigator />
    )
  }
}

const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Book: BookScreen,
  Electronic: ElectronicScreen,
  Cart: CartScreen
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerTitle: 'Shopping',
    headerRight: <ShoppingCartIcon />
  }
})
