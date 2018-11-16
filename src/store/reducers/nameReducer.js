const initialState = {
    name: ''
}

const nameReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_NAME':
            return {...state, name: action.name}
    }
    return state
}

export default nameReducer