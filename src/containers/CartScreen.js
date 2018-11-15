import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {connect} from 'react-redux'

import {removeItemToCart} from '../store/actions/cartActions'

import ProductList from '../components/ProductList'

class CartScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: 'green', marginBottom: 10 }}>CartScreen</Text>
        {this.props.items.length > 0 ? 
          <ProductList products={this.props.items} press={this.props.removeItemToCart} /> : <Text>You do not choose any product</Text>}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      items: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemToCart: (item) => dispatch(removeItemToCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)
