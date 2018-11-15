import React from 'react'
import { Text, View } from 'react-native'

import {connect} from 'react-redux'
import { withNavigation } from 'react-navigation'

const ShoppingCartIcon = (props) => {
    return (
      <View>
        <Text onPress={() => props.navigation.navigate('Cart')}>{props.items.length}</Text>
      </View>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cart
    }
}

export default connect(mapStateToProps, null)(withNavigation(ShoppingCartIcon))