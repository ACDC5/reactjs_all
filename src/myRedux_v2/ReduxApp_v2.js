import React, {Component} from 'react';
import story from "./test_story/story";
import {createIncrementAction,createDecrementAction} from "./test_action/count_action";

// https://www.bilibili.com/video/BV1wy4y1D7JT?p=101
class ReduxApp_v2 extends Component {

    //使用redux也组件也可有自己的state，我们只需将公享的state放到redux
    state = {
        noThing:null
    }


    //加
    increment = () => {
        const {value} = this.ElmValue
        story.dispatch(createIncrementAction(value))
        // story.dispatch({type:'increment',data:value})
    }

    //减
    decrement = () => {
        const {value} = this.ElmValue
        story.dispatch(createDecrementAction(value))
        // story.dispatch({type:'decrement',data:value})


    }

    //奇数再加
    incrementIfAdd = () => {
        const {value} = this.ElmValue
        const count = story.getState()//获取reducer中的状态
        if(count % 2 !== 0) {
            story.dispatch(createIncrementAction(value))
        }

    }

    异步加
    incrementAsync = () => {
        const {value} = this.ElmValue
        setTimeout(() =>{
            story.dispatch(createIncrementAction(value))
        },500)


    }

    render() {
        return (
            <div>
                <h1>当前和为:{story.getState()}</h1>
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

export default ReduxApp_v2;
