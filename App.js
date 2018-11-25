import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Screen01 from './src/screens/Screen01'
import Screen02 from './src/screens/Screen02'
import Screen03 from './src/screens/Screen03'
import Screen04 from './src/screens/Screen04'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Screen04 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
