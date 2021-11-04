//action对象，用于向store传递数据和要完成事情的类型，
// 类型供reducer做判断去做相应的事情

import {DECREMENT,INCREMENT} from '../../constant'

// 异步action可以不用引入store的dispatch函数
// import story from "../test_story/store";

//当action返回一个一般对象时称为同步action
const createIncrementAction = data => ({type:INCREMENT,data})
const createDecrementAction = data => ({type:DECREMENT,data})

//当action返回一个函数时称为异步action，
//异步action最终得到的是一个对象，所以传递(返回)给store的其实也是一个一般对象
const createIncrementAsyncAction = (data,time) => {
        return (dispatch) => { //调用createIncrementAsyncAction时会自动传入store的dispatch方法
                setTimeout(() => {
                        dispatch({type:INCREMENT,data})
                },time)
        }

}

export {
        //分别暴露
        createDecrementAction,
        createIncrementAction,
        createIncrementAsyncAction
}
