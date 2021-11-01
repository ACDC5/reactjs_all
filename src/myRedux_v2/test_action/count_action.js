//action对象，用于向store传递数据和要完成事情的类型，
// 类型供reducer做判断去做相应的事情

import {DECREMENT,INCREMENT} from '../constant'

const createIncrementAction = data => ({type:INCREMENT,data})
const createDecrementAction = data => ({type:DECREMENT,data})

export {createDecrementAction,
        createIncrementAction
}
