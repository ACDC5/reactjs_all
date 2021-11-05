import React, {Component,PureComponent} from 'react';
import './styles.css'

class PureComponentDemo extends PureComponent {

    state = {carName:'奔驰c36'}

    //手动设置更新组件的阀门。根据返回值执行render()
    //如果组件继承了PureComponent，就不用自己重写shouldComponentUpdate
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     //如果当前状态和更新后的状态相同时(数据一样),停止渲染页面(render())
    //     // console.log('当前状态:',this.state,'新状态:',nextState)
    //     //TODO bug 返回值错误，导致页面没按照预期刷新
    //     return !this.state.carName === nextState.carName
    // }

    change = () => {
        //这里setState得到的是一个新对象
        this.setState({carName: '111'})

        /**注意:在继承PureComponent的组件中，这样写将无法更新状态
         * ，因为自始至终this.state和setState()操作的都是
         * 同一个对象(导致阀门返回false)
            const obj = this.state
            obj.carName = this.state
            this.setState(obj)
         */

    }

    render() {
        console.log('父render执行')
        const {carName} = this.state
        return (
            <div className='a'>
                <h3>PureComponent-优化-我是父组件</h3>
                <h4>车名是：{carName}</h4><br/>
                <button onClick={this.change}>点我换车</button>
                <Child carName={carName}/>
            </div>
        );
    }
}

class Child extends PureComponent{

    //手动设置更新组件的阀门
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     //如果当前状态和更新后的状态相同时(数据一样),停止渲染页面(render())
    //     console.log('当前属性:',this.props,'将要变成的属性:',nextProps)
    //     if (this.props.carName === nextProps.carName) {
    //         return false
    //     } else {
    //         return true
    //     }
    // }

    render() {
        console.log('子render执行')
        return (
            <div className='b'>
                <h3>我是子组件</h3>
                <h4>我是用户名：{this.props.carName}</h4>
            </div>
        );
    }
}


export default PureComponentDemo;
