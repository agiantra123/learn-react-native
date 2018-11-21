import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Realm from 'realm'

// SHOW PATH LOCATION

export default class Realm02 extends Component {
    constructor(props) {
        super(props);
        this.state = { realm: null, path: '' };
    }
    componentWillMount() {
        Realm.open({
          schema: [{name: 'People', properties: {name: 'string'}}]
        }).then(realm => {
          realm.write(() => {
            realm.create('People', {name: 'Rex'});
          });
          this.setState({ realm, path: realm.path }); // realm.path show realm db path location
        });
    }
    render() {
        const info = this.state.realm
            ? 'Number of people in this Realm: ' + this.state.realm.objects('People').length
            : 'Loading...';
        return (
            <View>
                <Text>Start of Realm02</Text>
                <Text>{info}</Text>
                <Text>{this.state.path}</Text>
                <Text>End of Realm02</Text>
            </View>
        )
    }
}
