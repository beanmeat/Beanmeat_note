// 引入CountUI组件
import CountUI from '../../components/Count'
// 引入store
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action";
// 引入connect用于链接UI跟redux
import {connect} from "react-redux";

/**
 * mapStateToProps函数返回的是一个对象
 * key作为传递UI组件props的key，value为值
 * mapStateToProps用于传递状态
 */
function mapStateToProps(state){
    return {count: state}
}

/**
 * mapDispatchToProps函数返回的是一个对象
 * key作为传递UI组件props的key，value为值
 * mapDispatchToProps用于操作状态的方法
 */
function mapDispatchToProps(dispatch){
    return {
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time)),
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(CountUI)