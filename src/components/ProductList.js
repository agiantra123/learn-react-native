import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ProductList extends Component {

    renderProducts = (products) => {
        return products.map((item, index) => {
            return (
                <Text key={index} onPress={() => this.props.press(item)}>{item.name + " - " + item.price}</Text>
            )
        })
    }

    render() {
        return (
        <View>
            {this.renderProducts(this.props.products)}
        </View>
        )
    }
}
