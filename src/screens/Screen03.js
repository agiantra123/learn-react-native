import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {peopleJson} from '../realm/dataJson'
import {insertPeopleData} from '../realm/realmUtils03'

/**
 * agiantra123@gmail.com
 * 1. Insert data from external file (dataJson.js)
 * 2. Open realm and create/insert data method/function from external file (realmUtils.js)
 * 3. realmUtils with Promise
 */

export default class Screen03 extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        insertPeopleData(peopleJson)
            .then((peopleJson) => {
                alert(peopleJson.length)
            })
            .catch((error) => {
                alert('error!')
            })
    }
    render() {
        return (
            <View>
                <Text>Screen03 - Test input json to realm automatically</Text>
            </View>
        )
    }
}
