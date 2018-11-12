import { CREATE_TODO, TOGGLE_TODO } from '../actions/actionTypes'

let nextTodoId = 3
// const initialState = {
//     todos: [{todoId: 100, todoName: 'Run away', todoComplete: false},{todoId: 102, todoName: 'Go back', todoComplete: false}]
// }
const todoReducer = (state = [{todoId: 1, todoName: 'Run away', todoComplete: true},{todoId: 2, todoName: 'Go back', todoComplete: false}], action) => {   
    switch(action.type){
        case CREATE_TODO:
            return [...state,{
                    todoId: nextTodoId++,
                    todoName: action.todoName,
                    todoComplete: false
                }]
        case TOGGLE_TODO:
            return state.map((todo) =>  
                action.todoId === todo.todoId ? {...todo, todoComplete: !todo.todoComplete} : todo
            )
    }
    return state
}

export default todoReducer