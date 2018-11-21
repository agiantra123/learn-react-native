import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Realm from 'realm'

// BASIC

export default class Realm01 extends Component {
    constructor(props) {
        super(props);
        this.state = { realm: null };
    }
    componentWillMount() {
        Realm.open({
          schema: [{name: 'Dog', properties: {name: 'string'}}]
        }).then(realm => {
          realm.write(() => {
            realm.create('Dog', {name: 'Rex'});
          });
          this.setState({ realm });
        });
      }
    render() {
        const info = this.state.realm
            ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
            : 'Loading...';
        return (
            <View>
                <Text>Start of Realm01</Text>
                <Text>{info}</Text>
                <Text>End of Realm01</Text>
            </View>
        )
  }
}
