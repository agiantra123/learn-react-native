import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { connect } from 'react-redux'
import Button from 'react-native-button'

class CounterApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FAFBFC' }}>
        <Button onPress={() => this.props.increase()}>Increase</Button>
        <Text>{this.props.counter}</Text>
        <Button onPress={() => this.props.decrease()}>Decrease</Button>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({type: 'INCREASE_COUNTER'}),
    decrease: () => dispatch({type: 'DECREASE_COUNTER'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp) // SEE THE ORDER
