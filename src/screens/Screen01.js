import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Realm from 'realm'

import {peopleJson} from '../realm/dataJson'

/**
 * agiantra123@gmail.com
 * 1. Insert data from external file (dataJson.js)
 * 2. Open realm and create/insert data method/function from internal
 */

export default class Screen01 extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        Realm.open({
            schema: [{name: 'people', properties: {id: 'int', name: 'string', age: 'int'}}],
            schemaVersion: 2
        }).then(realm => {
            realm.write(() => {
                for(i=0;i<peopleJson.length;i++) {
                    realm.create('people', peopleJson[i]);
                }
            });
            alert(realm.objects('people').length)
        }).catch((error) => {
            alert('error!')
        });
    }
    render() {
        return (
            <View>
                <Text>Screen01 - Test input json to realm automatically</Text>
            </View>
        )
    }
}
