import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {peopleJson} from '../realm/dataJson'
import {insertPeopleData} from '../realm/realmUtils02'

/**
 * agiantra123@gmail.com
 * 1. Insert data from external file (dataJson.js)
 * 2. Open realm and create/insert data method/function from external file (realmUtils.js)
 */

export default class Screen02 extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        insertPeopleData(peopleJson)
    }
    render() {
        return (
            <View>
                <Text>Screen02 - Test input json to realm automatically</Text>
            </View>
        )
    }
}
