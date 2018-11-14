import React, {Component} from 'react';
import {Text, View, Platform} from 'react-native';

import { createMaterialTopTabNavigator } from 'react-navigation'
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

class Settingscreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settingscreen</Text>
      </View>
    );
  }
}

export default createMaterialTopTabNavigator({
  Home: {
    screen: Homescreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintcolor}) => (
        <Icon name={Platform.OS === "ios" ? "ios-home" : "md-home"} size={24} color={tintcolor}/>
      )
    }
  },
  Profile: {
    screen: Profilescreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintcolor}) => (
        <Icon name={Platform.OS === "ios" ? "ios-settings" : "md-settings"} size={24} color={tintcolor}/>
      )
    }
  },
  Settings: {
    screen: Settingscreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintcolor}) => (
        <Icon name={Platform.OS === "ios" ? "ios-settings" : "md-settings"} size={24} color={tintcolor}/>
      )
    }
  }
}, {
  initialRouteName: 'Home',
  // order: ['Home', 'Profile'],
  tabBarPosition: 'bottom', // IMPORTANT: 'top' or 'bottom'
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'orange',
    inactiveTintColor: 'white',
    showIcon: true,
    style: {
      backgroundColor: 'white',
      borderTopColor: 'orange',
      borderTopWidth: 0
    },
    indicatorStyle: {
      height: 0
    }
  }
})