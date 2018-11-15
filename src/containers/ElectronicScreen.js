import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import {addItemToCart} from '../store/actions/cartActions'

import ProductList from '../components/ProductList'

import {electronics} from '../data/dummyData'

class ElectronicScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> ElectronicScreen </Text>
        <ProductList products={electronics} press={this.props.addItemToCart} />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addItemToCart(item))
  }
}

export default connect(null, mapDispatchToProps)(ElectronicScreen)
