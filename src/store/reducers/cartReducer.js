import {ADD_ITEM_TO_CART, REMOVE_ITEM_TO_CART} from '../actions/actionTypes'

const cartReducer = (state = [], action) => {
    switch(action.type){
        case ADD_ITEM_TO_CART:
            return [...state, action.item]
        case REMOVE_ITEM_TO_CART:
            return state.filter((item) => item.id !== action.item.id)
    }
    return state
}

export default cartReducer