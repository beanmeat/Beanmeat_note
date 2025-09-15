// 引入CountUI组件
import CountUI from '../../components/Count'
// 引入store
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action";
// 引入connect用于链接UI跟redux
import {connect} from "react-redux";


export default connect (
    state => ({count: state}),
    // mapDispatchToProps的一般写法
    // dispatch => ({
    //         jia: number => dispatch(createIncrementAction(number)),
    //         jian: number => dispatch(createDecrementAction(number)),
    //         jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time)),
    //     })

    // mapDispatchToProps
    {
        jia: createIncrementAsyncAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction,
    }
)(CountUI)