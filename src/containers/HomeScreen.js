import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text onPress={() => this.props.navigation.navigate('Book')}>Book Products</Text>
        <Text onPress={() => this.props.navigation.navigate('Electronic')}>Electronic Products</Text>
      </View>
    )
  }
}
