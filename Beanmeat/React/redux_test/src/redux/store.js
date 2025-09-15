/**
 * 暴露store对象，整个应用只有一个store对象
 */
import {createStore,applyMiddleware,combineReducers} from 'redux'
import reducer from './reducers'

// 引入redux-thunk，用于支持异步action
import {thunk} from 'redux-thunk'
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'


export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))