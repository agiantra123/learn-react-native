import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Realm from 'realm'

// CUSTOM DB WITH ADDING FUNCTION & LIST OF DATA

export default class Realm05 extends Component {
    constructor(props) {
        super(props);
        this.state = { realm: null };
    }
    componentWillMount() {
        this._openRealm();
    }
    _openRealm = () => {
        Realm.copyBundledRealmFiles(); // \android\app\src\main\assets
        Realm.open({
          schema: [{name: 'people', properties: {id: 'int', name: 'string', age: 'int'}}],
          path: 'default.realm', // db name with extension
          schemaVersion: 1
        }).then(realm => {
            this.setState({ realm }); // save realm instance/reference
        });
    }
    _addPeople() {
        var date = new Date();
        var nowTime = date.getTime();
        var nowTimeMinute = date.getMinutes();
        this.state.realm.write(() => {
            this.state.realm.create('people', {id: nowTime, name: 'Dummy Name', age: nowTimeMinute});
        });
        this._openRealm();
    }
    render() {
        const info = this.state.realm
            ? 'Number of people in this Realm: ' + this.state.realm.objects('people').length
            : 'Loading...';
        return (
            <View>
                <Text>Start of Realm05</Text>
                <TouchableOpacity onPress={() => this._addPeople()}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Add People</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontSize: 16 }}>{info}</Text>
                <Text>End of Realm05</Text>
            </View>
        )
  }
}
