/**
 * Ardityo Giantra
 * agiantra123@gmail.com
 */

import React, {Component} from 'react';
import {Text, View, Platform} from 'react-native';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
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

class Profilescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profilescreen</Text>
      </View>
    );
  }
}

export default createMaterialBottomTabNavigator({
  Home: {
    screen: Homescreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintcolor}) => (
        <Icon name={Platform.OS === "ios" ? "ios-home" : "md-home"} size={24} color={tintcolor} />
      )
    }
  },
  Profile: {
    screen: Profilescreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintcolor}) => (
        <Icon name={Platform.OS === "ios" ? "ios-settings" : "md-settings"} size={24} color={tintcolor} />
      )
    }
  },
}, {
  initialRouteName: 'Home',
  order: ['Home', 'Profile'],
  activeTintColor: 'orange',
  barStyle: { backgroundColor: 'white', paddingBottom: 20 },
  shifting: true
})