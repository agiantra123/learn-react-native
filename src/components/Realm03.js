import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Realm from 'realm'

// BASIC CUSTOM DB

export default class Realm03 extends Component {
    constructor(props) {
        super(props);
        this.state = { realm: null };
    }
    componentWillMount() {
        Realm.copyBundledRealmFiles(); // \android\app\src\main\assets
        Realm.open({
          schema: [{name: 'people', properties: {id: 'int', name: 'string', age: 'int'}}],
          path: 'default.realm', // db name with extension
          schemaVersion: 1
        }).then(realm => {
            alert(JSON.stringify(realm.objects('people').length));
        });
      }
    render() {
        return (
            <View>
                <Text>Start of Realm03</Text>
                <Text>///</Text>
                <Text>End of Realm03</Text>
            </View>
        )
  }
}
