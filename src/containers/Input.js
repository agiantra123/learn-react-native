import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

import {connect} from 'react-redux'

import {setName} from '../store/actions/nameActions'

class Input extends Component {
  state = {
    name: ''
  }
  changeName = (name) => {
    this.setState({
      name
    })
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Please input your name! </Text>
        <TextInput placeholder='Your name here' keyboardType='default' onChangeText={(text) => this.changeName(text)} />
        <Text onPress={() => this.props.setName(this.state.name)}>Set name</Text>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        name: state.name.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch(setName(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
