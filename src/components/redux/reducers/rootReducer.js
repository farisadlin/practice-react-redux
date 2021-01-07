import { combineReducers } from 'redux'

import counterReducer from './counter-reducer'
import articleReducer from './article-reducer'

const rootReducer = combineReducers({
    counter: counterReducer,
    article: articleReducer
})

export default rootReducer