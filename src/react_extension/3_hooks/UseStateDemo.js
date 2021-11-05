import React from 'react';
import {func} from "prop-types";

//函数式的组件的状态每次改更新，都会执行函数式组件自身一次，
// 除了第一次的执行，后续的更新执行它都不会把useState的初始值给
// 当前的到状态，避免导致每次更新状态都是初始值(react做了底层处理)

function UseStateDemo() {//函数组件的执行次数:1+n 第一次加载执行一次，每次状态更新n次
        //每添加一个状态都需要写一条useState
        // useState返回2个数组元素，第一个为状态当前值，第二个为更新状态值的函数
        const [count,setCount] = React.useState(0)
        const [name,setName] = React.useState('')


        function add() {
            // 第一种写法
            // setCount(count+1)

            // 第二种写法(和setState的第二种写法一样)
            setCount( count => count+1)
        }

        function onChange() {
            setName('张三')
        }

        return (
            <div>
                <h1>[使用useState]当前求和为:{count}</h1>
                <button onClick={add}>点我+1</button>

                <h1>我的名字是:{name ? name : '里斯'}</h1>
                <button onClick={onChange}>点我改名</button>
            </div>
        );

}

export default UseStateDemo;
