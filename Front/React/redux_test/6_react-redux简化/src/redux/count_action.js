/**
 * 专门为Count组件生成action对象
 */
import {INCREMENT,DECREMENT} from "./constant";

export const createIncrementAction = data  =>  ({ type:INCREMENT,data })

// 同步action指返回的指是对象
export const createDecrementAction = data  =>  ({ type:DECREMENT,data })

/**
 * 异步action就是值返回值为函数,异步action中一般都会调用同步action
 * @param data
 * @param time
 * @returns {(function())|*}
 */
export const createIncrementAsyncAction = (data,time)  =>  {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        },time)
    }
}

