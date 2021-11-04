import React, {Component} from 'react';
/*setState的两种用法*/

class UseSetState extends Component {

    state = {count:0}

    add = () => {
        const {count} = this.state
        //TODO 1、对象式的setState-常用的方式
        // this.setState({count:count+1})

        //TODO 2、函数式的setState,好处不用自动传入当前的状态
        this.setState((state,props) => {
            return {count: state.count+1}
        })


        //TODO 补充知识点:
        /*this.setState({count:count+1},

            // setState的callback是可选的回调函数，他在状态更新完毕后、
            // 界面也更新后(render调用后)才被调用，相当于ComponentDidupdate函数的作用，
            // 即组件状态更新后立即去做某些事情
            () => {
                console.log(this.state.count)
            }
        )*/
    }

    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}

export default UseSetState;
