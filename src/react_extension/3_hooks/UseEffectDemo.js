import React from 'react';
import ReactDOM from 'react-dom'

function UseEffectDemo() {

    const [count,setCount] = React.useState(0)

    /**可以把useEffect看做如下三个函数的组合
    componentDidMount()
    componentDidUpdate()
    componentWillUnmount() */

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count+1)//在这里必需使用这种方式才能更新状态
        },1000)
        return () => {//卸载当前组件时，会自动调用return函数，
                      // return的函数相当于类组件的componentWillUnmount函数
            clearInterval(timer)
        }
    },[])
    /**
     * 任何情况下，useEffect的参数一回调至少执行一次.

    (1)如果参数二不写任何东西，useEffect就默认监控所有的state,
       只要任何状态发生更新，都会去执行第一个参数的回调
       (此时Effect函数相当于类组件的componentDidUpdate())；
    (2)如果传了参数二，并且是空数组，则默认不监测任何状态,
       任何状态的更新都不会导致参数1被执行,
       (此时Effect函数相当于类组件的componentDidMount);

       如果参数二中有值(即状态)，则监控该状态，当被监控的状态发生
       改变时，则执行参数一的回调(相当于componentDidUpdate)

     (3)Effect参数一,如果只要返回了一个函数，那么这个函数就相
        当于类组件的componentWillUnmount，
        此时Effect函数相当于类组件的componentWillUnmount()
     */




    function add() {
        // 第一种写法
        // setCount(count+1)

        // 第二种写法(和setState的第二种写法一样)
        // setCount( count => count+1)
    }

    //卸载组件
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return (
        <div>
            <h1>[useEffect]当前求和为:{count}</h1>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
        </div>
    );
}

export default UseEffectDemo;
