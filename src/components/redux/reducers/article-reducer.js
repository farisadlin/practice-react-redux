import {FETCH_ARTICLES_REQUEST, FETCH_ARTICLES_FAILURE, FETCH_ARTICLES_SUCCESS} from '../actions/action-types'

const initialState = {
  loading: false,
  articles: [],
  error: ''
}

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_ARTICLES_SUCCESS:
      return {
        loading: false,
        articles: action.payload,
        error: ''
      }
    case FETCH_ARTICLES_FAILURE:
      return {
        loading: false,
        articles: [],
        error: action.payload
      }
    default: return state
  }
}

export default articleReducer