import React, {Component} from 'react';
import {connect} from "react-redux";
import {createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from "../test_redux/action/count";
import countReducer from "../test_redux/reducers/count";
import personReducer from "../test_redux/reducers/person";

class Count extends Component {

    //使用redux也组件也可有自己的state，我们只需将公享的state放到redux
    state = {
        noThing:null
    }


    //加
    increment = () => {
        const {value} = this.ElmValue
        this.props.add(value)
    }

    //减
    decrement = () => {
        const {value} = this.ElmValue
        // story.dispatch(createDecrementAction(value))//使用redux的写法
        this.props.delete(value)//使用react-redux的写法，直接从容器组件拿到传给UI的值并使用
    }

    //奇数再加
    incrementIfAdd = () => {
        const {value} = this.ElmValue
        // const count = story.getState()//获取reducer中的状态
        const {count,add} = this.props//UI组件不使用redux的api，所以直接从容器组件获取数据
        if(count % 2 !== 0) {
            add(value)
        }
    }

    异步加
    // incrementAsync = () => {
    //     const {value} = this.ElmValue
    //     setTimeout(() =>{
    //         story.dispatch(createIncrementAction(value))
    //     },500)
    // }

    // 异步加(使用异步action实现)
    incrementAsync = () => {
        const {value} = this.ElmValue
        // story.dispatch(createIncrementAsyncAction(value,500))
        this.props.asyncAdd(value,500)
    }

    render() {
        return (
            <div>
                <h2>我是Count组件;下方组件的人数为:{this.props.peoples.length}</h2>
                <h3>当前和为:{this.props.count}</h3>
                <select ref={ c => this.ElmValue = c}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfAdd}>当前为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        );
    }
}

//TODO 可查看Person组件connect的一般写法方式
export default connect(//默认导出容器组件,容器可以拿到所以reducer的状态
    //映射状态
    state => (//state是一个reducer或者是一个reducers对象，具体看store中传入的reducer数量
        {
            count:state.countReducer,//获取计算和reducer
            peoples:state.personReducer
        }
    ),

    // 映射操作状态的方法(mapDispatchToProps回调的简写方式)
    {
        add:createIncrementAction,//react-redux库会自动传入dispatch(action),此库的api支持这种写法
        delete:createDecrementAction,
        asyncAdd:createIncrementAsyncAction
    }
)(Count)
