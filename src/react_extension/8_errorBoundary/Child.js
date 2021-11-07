import React, {Component} from 'react';

class Child extends Component {

    //模拟服务器返回的正确数据
    state = [
        {'id':'001','name':'tom','age':18},
        {'id':'002','name':'jerry','age':19},
        {'id':'003','name':'div','age':20}
    ]

    /**模拟服务器返回了错误类型的数据，导致渲染失败
     * 触发父组件执行边界错误的执行*/
    // state = 'map'


    //错误必须出现在组件的生命周期函数中，才能被父组件捕获
    render() {
        return (
            <div>
                <h1>我是Child<br/>
                    <h6>想要演示错误边界，切换子组件的state</h6>
                </h1>
                {this.state.map(item => {
                    return <h2 key={item.id}>名称:{item.name}，年龄:{item.age}</h2>
                })}
            </div>
        );
    }
}

export default Child;
