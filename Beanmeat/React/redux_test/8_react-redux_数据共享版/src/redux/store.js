/**
 * 暴露store对象，整个应用只有一个store对象
 */
import {createStore,applyMiddleware,combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// 引入redux-thunk，用于支持异步action
import {thunk} from 'redux-thunk'

const allReducer = combineReducers({
    count: countReducer,
    person: personReducer
})
export default createStore(allReducer,applyMiddleware(thunk))