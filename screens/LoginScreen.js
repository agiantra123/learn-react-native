/**
 * Ardityo Giantra
 * agiantra123@gmail.com
 */

import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class LoginScreen extends Component {
    static navigationOptions = { // styling bar
        title: 'Login Screen',
        headerStyle: {
            backgroundColor: 'purple',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            // At least there are 4 navigation props (navigate, push, goBack, and popToTop)
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                <Text> LoginScreen </Text>
                <Button title='Go to Homescreen' onPress={() => this.props.navigation.navigate('Home')} />
                <Button title='Go to Homescreen Again. No' onPress={() => this.props.navigation.navigate('Login')} />
                <Button title='Go to Homescreen Again' onPress={() => this.props.navigation.push('Login')} />
            </View>
        )
  }
}
