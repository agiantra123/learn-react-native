import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import {addItemToCart} from '../store/actions/cartActions'

import ProductList from '../components/ProductList'

import {books} from '../data/dummyData'

class BookScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: 'green', marginBottom: 10 }}> BookScreen </Text>
        <ProductList products={books} press={this.props.addItemToCart} />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addItemToCart(item))
  }
}

export default connect(null, mapDispatchToProps)(BookScreen)
