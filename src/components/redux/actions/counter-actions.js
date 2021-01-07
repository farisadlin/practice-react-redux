import {INCREMENT, DECREMENT, RESET} from './action-types'

export const incCounter = (number = 1)  => {
    return {
        type: INCREMENT,
        payload: number
    }
}

export const decCounter = (number = 1)  => {
    return {
        type: DECREMENT,
        payload: number
    }
}

export const resetCounter = ()  => {
    return {
        type: RESET,
    }
}

