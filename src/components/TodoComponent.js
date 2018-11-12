import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Button from 'react-native-button'
import { createTodo, toggleTodo } from '../store/actions/todoActions'
import { visibleAll, visibleCompleted, visibleNotCompleted } from '../store/actions/filterActions'
import { VISIBLE_ALL, VISIBLE_NOT_COMPLETED, VISIBLE_COMPLETED } from '../store/actions/actionTypes';

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

            {/* AddTodo */}

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <TextInput style={{ backgroundColor:'#F2F2F2', padding: 6, width: 200, fontSize: 16, color: 'grey', marginRight: 10 }} value={this.state.newTodoName} 
                        placeholder='Eg: Go to supermarket' placeholderTextColor='grey' keyboardType='default' autoCapitalize='sentences'
                        onChangeText={(Text) => this.setState({ newTodoName: Text })} />
                <Button containerStyle={{padding: 6, backgroundColor: 'blue', borderRadius: 4}}
                        style={{fontSize: 18, color: 'white'}} onPress={() => this.addTodo()}>Add</Button>
            </View>

            {/* TodoList */}

            {this.props.todos && this.props.todos.map(todo =>
                <TouchableOpacity style={{ padding: 4, marginLeft: 14 }} key={todo.todoId} onPress={() => this.checkTodo(todo.todoId)}>
                    <Text style={{ fontSize: 20, textDecorationLine: todo.todoComplete ? 'line-through' : 'none' }}>{todo.todoId + '- ' + todo.todoName}</Text>
                </TouchableOpacity>
            )}

            {/* VisibilityFilters */}
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                <Button containerStyle={{padding: 6, backgroundColor: 'green', borderRadius: 4}}
                        style={{fontSize: 18, color: 'white'}} onPress={() => this.props.visibleAll()}>All</Button>
                <Button containerStyle={{padding: 6, backgroundColor: 'tomato', borderRadius: 4}}
                        style={{fontSize: 18, color: 'white'}} onPress={() => this.props.visibleNotCompleted()}>Completed</Button>
                <Button containerStyle={{padding: 6, backgroundColor: 'red', borderRadius: 4}}
                        style={{fontSize: 18, color: 'white'}} onPress={() => this.props.visibleCompleted()}>Not completed</Button>
            </View>
            <Text style={{ textAlign: 'center', fontSize: 14, marginTop: 20 }}>agiantra123@gmail.com</Text>
        </View>
        )
    }
}

const mapStateToProps = (state) => {
    switch(state.filter){ // using switch to see the active filter, then map todos by filter
        case VISIBLE_ALL:
            return {
                filter: state.filter,
                todos: state.todo
            }
        case VISIBLE_NOT_COMPLETED:
            return {
                filter: state.filter,
                todos: state.todo.filter(todo => todo.todoComplete === false )
            }
        case VISIBLE_COMPLETED:
            return {
                filter: state.filter,
                todos: state.todo.filter(todo => todo.todoComplete === true )
            }
    }
    // return {
    //     // 'todo' & 'filter' is name of the combined reducer in rootReducer.js
    //     todos: state.todo,
    //     filter: state.filter
    // }
}

const mapDispatchToProps = (dispath) => {
    return {
        createTodo: (newTodoName) => dispath(createTodo(newTodoName)), // 2 dispatch for changing todo state
        toggleTodo: (todoId) => dispath(toggleTodo(todoId)),
        visibleAll: () => dispath(visibleAll()), // 3 dispatch for changing filter state
        visibleNotCompleted: () => dispath(visibleNotCompleted()),
        visibleCompleted: () => dispath(visibleCompleted())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent) // mapStateToProps, then mapDispatchToProps
