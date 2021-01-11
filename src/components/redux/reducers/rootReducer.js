import { combineReducers as combiner } from 'redux'

import counterReducer from './counter-reducer'
import articleReducer from './article-reducer'
import todosReducer from './todos-reducer/todos'
import visibilityFilterReducer from './todos-reducer/visibilityFilter'
import shoppingReducer from './shopping-reducer'

const rootReducer = combiner({
    counter: counterReducer,
    article: articleReducer,
    shopping: shoppingReducer,
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer,
})

export default rootReducer