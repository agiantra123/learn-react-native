import { VISIBLE_ALL, VISIBLE_NOT_COMPLETED, VISIBLE_COMPLETED } from '../actions/actionTypes'

const filterReducer = (state = VISIBLE_ALL, action) => {
    switch(action.type){
        case VISIBLE_ALL:
            return VISIBLE_ALL
        case VISIBLE_NOT_COMPLETED:
            return VISIBLE_NOT_COMPLETED
        case VISIBLE_COMPLETED:
            return VISIBLE_COMPLETED
    }
    return state
}

export default filterReducer