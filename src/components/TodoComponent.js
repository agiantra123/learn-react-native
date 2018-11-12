import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Button from 'react-native-button'
import { createTodo, toggleTodo } from '../store/actions/todoActions'

class TodoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            newTodoName: ''
        }
    }
    addTodo = () => {
        if(this.state.newTodoName == ''){
            return
        }
        this.props.createTodo(this.state.newTodoName)
        this.setState({
            newTodoName: ''
        })
    }
    checkTodo = (todoId) => {
        this.props.toggleTodo(todoId)
    }
    render() {
        return (
        <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <TextInput style={{ backgroundColor:'#F2F2F2', padding: 6, width: 200, fontSize: 16, color: 'grey', marginRight: 10 }} value={this.state.newTodoName} 
                        placeholder='Eg: Go to supermarket' placeholderTextColor='grey' keyboardType='default' autoCapitalize='sentences'
                        onChangeText={(Text) => this.setState({ newTodoName: Text })} />
                <Button containerStyle={{padding: 6, backgroundColor: 'blue', borderRadius: 4}}
                        style={{fontSize: 18, color: 'white'}} onPress={() => this.addTodo()}>Add</Button>
            </View>
            {this.props.todos && this.props.todos.map(todo =>
                <TouchableOpacity style={{ padding: 4, marginLeft: 14 }} key={todo.todoId} onPress={() => this.checkTodo(todo.todoId)}>
                    <Text style={{ fontSize: 20, textDecorationLine: todo.todoComplete ? 'line-through' : 'none' }}>{todo.todoId + '- ' + todo.todoName}</Text>
                </TouchableOpacity>
            )}
            <Text style={{ textAlign: 'center', fontSize: 14, marginTop: 20 }}>agiantra123@gmail.com</Text>
        </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // 'todo' is name of the combined reducer in rootReducer.js
        todos: state.todo 
    }
}

const mapDispatchToProps = (dispath) => {
    return {
        createTodo: (newTodoName) => dispath(createTodo(newTodoName)),
        toggleTodo: (todoId) => dispath(toggleTodo(todoId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent)
