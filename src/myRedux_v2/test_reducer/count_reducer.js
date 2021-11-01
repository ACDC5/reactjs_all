/*1、该文件用于创建为count组件服务的reducer，reducer本质就是一个函数
* 2、reducer接收两个参数，分别是之前的状态(preState)，动作对象(action)
* 3、接收store传过来的action对象，数据加工后返回给store，
*    组件可通过store.getState获取加工后的数据*/

import {INCREMENT,DECREMENT} from '../../myRedux_v2/constant'

const initState = 0

export default function countReducer(preState=initState,action) {

    //从action对象中获取type，data
    const {type,data} = action

    //根据type类型决定如何加工数据
    switch (type) {
        case INCREMENT://如果是加
            return preState + data*1
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}


