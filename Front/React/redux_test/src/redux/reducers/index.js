/**
 * 该文件汇总所有reducer
 */
import countReducer from '../reducers/count'
import personReducer from '../reducers/person'
import {combineReducers} from "redux";

const allReducer = combineReducers({
    count: countReducer,
    person: personReducer
})

export default allReducer;