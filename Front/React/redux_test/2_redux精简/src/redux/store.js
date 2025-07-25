/**
 * 暴露store对象，整个应用只有一个store对象
 */
import {createStore} from 'redux'
import countReducer from './count_reducer'

export default createStore(countReducer)