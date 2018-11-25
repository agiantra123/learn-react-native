import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {peopleJson} from '../realm/dataJson'
import {insertPeopleData, queryAllPeopleData} from '../realm/realmUtils04'

/**
 * agiantra123@gmail.com
 * 1. Insert data from external file (dataJson.js)
 * 2. Open realm and create/insert data method/function from external file (realmUtils.js)
 * 3. realmUtils with Promise
 * 4. Get the number of data
 */

export default class Screen04 extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        insertPeopleData(peopleJson)
            .then((peopleJson) => {
                // alert('number of data inserted: ' + peopleJson.length)
                queryAllPeopleData()
                .then((peopleData) => {
                    alert('number of all data: ' + peopleData.length + ' - data inserted: ' + peopleJson.length)
                })
                .catch()
            })
            .catch((error) => {
                alert('error!')
            })
    }
    render() {
        return (
            <View>
                <Text>Screen04 - Test input json to realm automatically</Text>
            </View>
        )
    }
}
