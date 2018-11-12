import { CREATE_TODO, TOGGLE_TODO } from './actionTypes'

export const createTodo = (newTodoName) => {
    return {
        type: CREATE_TODO,
        todoName: newTodoName
    }
}

export const toggleTodo = (todoId) => {
    return {
        type: TOGGLE_TODO,
        todoId: todoId
    }
}