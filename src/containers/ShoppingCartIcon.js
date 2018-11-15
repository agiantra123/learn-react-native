import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import {connect} from 'react-redux'
import { withNavigation } from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons'

const ShoppingCartIcon = (props) => {
    return (
      <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
        <View style={{ height: 30, width: 30, borderRadius: 15, opacity: 0.8, backgroundColor: 'green', justifyContent: 'center', 
            alignItems: 'center', position: 'absolute', right: 5, bottom: 5, zIndex: 200 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>{props.items.length}</Text>
        </View>
        <Icon name='md-cart' size={24} />
      </TouchableOpacity>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cart
    }
}

export default connect(mapStateToProps, null)(withNavigation(ShoppingCartIcon))