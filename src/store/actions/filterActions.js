import { VISIBLE_ALL, VISIBLE_NOT_COMPLETED, VISIBLE_COMPLETED } from '../actions/actionTypes'

export const visibleAll = () => {
    return {
        type: VISIBLE_ALL
    }
}

export const visibleNotCompleted = () => {
    return {
        type: VISIBLE_NOT_COMPLETED
    }
}

export const visibleCompleted = () => {
    return {
        type: VISIBLE_COMPLETED
    }
}