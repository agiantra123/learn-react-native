import {ADD_ITEM_TO_CART, REMOVE_ITEM_TO_CART} from '../actions/actionTypes'

export const addItemToCart = (item) => {
    return {
        type: ADD_ITEM_TO_CART,
        item
    }
}

export const removeItemToCart = (item) => {
    return {
        type: REMOVE_ITEM_TO_CART,
        item
    }
}