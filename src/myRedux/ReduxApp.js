import React, {Component} from 'react';
import story from "./test_story/story";

// https://www.bilibili.com/video/BV1wy4y1D7JT?p=100
class ReduxApp extends Component {

    //使用redux也组件也可有自己的state，我们只需将公享的state放到redux
    state = {
        noThing:null
    }


    // componentDidMount() {
    //     //TODO 不是说componentDidMount只挂载时执行一次吗?
    //     console.log('不是说componentDidMount只会执行一次吗')
    //
    //     //redux只负责状态的管理更新，不管页面的刷新；
    //     // 所以:只要reducer状态发生了改变，需要在监听回调中
    //     // 手写调用render()来更新页面
    //
    //      //TODO 一劳永逸的办法，将reducer监听回调下载应用的入口文件，只要应用的某个状态改变，
            //TODO 整个应用的更新(不会有效率问题，react的diff算法只更新state改变的组件)
    //     story.subscribe(() => {
    //             this.setState({})
    //         }
    //     )
    // }

    //加
    increment = () => {
        const {value} = this.ElmValue
        story.dispatch({type:'increment',data:value})
    }

    //减
    decrement = () => {
        const {value} = this.ElmValue
        story.dispatch({type:'decrement',data:value})


    }

    //奇数再加
    incrementIfodd = () => {
        const {value} = this.ElmValue
        const count = story.getState()
        if(count % 2 !== 0) {
            story.dispatch({type:'increment',data: value})
        }

    }

    异步加
    incrementAsync = () => {
        const {value} = this.ElmValue
        // const count = story.getState()
        setTimeout(() =>{
            story.dispatch({type:'increment',data: value})
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
                <button onClick={this.incrementIfodd}>当前为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        );
    }
}

export default ReduxApp;
