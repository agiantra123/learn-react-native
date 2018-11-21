import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Realm01 from './src/components/Realm01'
import Realm02 from './src/components/Realm02'
import Realm03 from './src/components/Realm03'
import Realm04 from './src/components/Realm04'
import Realm05 from './src/components/Realm05'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Realm01 /> */}
        <Realm04 />
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