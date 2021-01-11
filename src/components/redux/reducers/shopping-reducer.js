import {ADD_DATA} from '../actions/action-types'
import data from '../../shopping/Data'

const initialState = {
    data: data,
}

const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_DATA:
        return {
          ...state,
          data: state.data.map(({stock}) => {
            return stock - 1
          }),
        };
      default:
        return state;
    }
}

export default shoppingReducer