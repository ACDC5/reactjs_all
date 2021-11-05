import React, {Component} from 'react';
import './styles.css'

// 创建Context容器对象
const MyContext = React.createContext()
// const {Provider,Consumer} = React.createContext()

class ContextDemo extends Component {

    state = {username:'tom',age:18}
    render() {
        const {username,age} = this.state
        return (
            <div className='parent'>
                <h3>Context的使用-我是A组件</h3>
                <h4>我是用户名：{username}</h4>
                {/*向B组件及其所有的子组件传递value中的数据*/}
                <MyContext.Provider value={{username,age}}>
                    <B/>
                </MyContext.Provider>
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className='child'>
                <h3>我是B组件</h3>
                <h4>我是用户名：??</h4>
                <C/>
            </div>
        );
    }
}

class C extends Component {

    /**声明接收context(此方式仅适用于类组件)，哪个组
     * 件要用就要在该组件声明否则无法拿到数据*/
    static contextType = MyContext
    render() {
        const {username,age} = this.context
        return (
            <div className='grand'>
                <h3>我是C组件</h3>
                <h4>来自A组件的用户名：{username},年龄是{age}</h4>
                <D/>
            </div>
        );
    }
}

function D() {
    return(
        <div className='D'>
            <h3>我是D函数组件</h3>
            <h4>我从A组件接收到的用户名：
                {/*函数组件的写法，类组件也可用这种方式写*/}
                <MyContext.Consumer>
                    {
                        value => `${value.username},年龄是${value.age}`
                    }
                </MyContext.Consumer>
            </h4>
        </div>
    )

}

export default ContextDemo;
