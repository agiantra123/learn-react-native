/**
 * Ardityo Giantra
 * agiantra123@gmail.com
 * */

import React, {Component} from 'react';
import {Text, View, Platform, Button} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

class Homescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Homescreen</Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

// A stack navigator for each tab (https://reactnavigation.org/docs/en/tab-based-navigation.html#a-stack-navigator-for-each-tab)

// import { createStackNavigator } from 'react-navigation'

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen, // example
// });

// const SettingsStack = createStackNavigator({
//   Settings: Settings,
//   Details: DetailsScreen, // example
// });

export default createBottomTabNavigator({
  Home: {
    screen: Homescreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon name={Platform.OS === "ios" ? "ios-home" : "md-home"} size={24} color={tintColor}/>
      )
    }
  },
  Setting: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor}) => (
        <Icon name={Platform.OS === "ios" ? "ios-settings" : "md-settings"} size={24} color={tintColor}/>
      )
    }
  }
}, {
  initialRouteName: 'Setting',
  order: ['Setting', 'Home'],
  navigationOptions: {
    tabBarVisible: true // false for unvisibility
  },
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    labelStyle: {
      fontSize: 14
    },
    style: {
      backgroundColor: '#EBEFF3',
      paddingTop: 8
    }
  }
})