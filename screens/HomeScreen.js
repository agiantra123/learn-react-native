/**
 * Ardityo Giantra
 * agiantra123@gmail.com
 */

import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class HomeScreen extends Component {
    static navigationOptions = { // styling bar
        title: 'Home Screen',
        headerStyle: {
            backgroundColor: '#f4511e',
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
                <Text> HomeScreen </Text>
                <Button title='Back to Loginscreen' onPress={() => this.props.navigation.goBack()} />
                <Button title='Go to first screen' onPress={() => this.props.navigation.popToTop()} />
            </View>
        )
    }
}
