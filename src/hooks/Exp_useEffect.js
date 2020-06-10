import React,{useState,useEffect} from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function Index() {
    // useEffect(() => {
           //只要当前页面(注意不是当前组件)有任何状态发生改变，都会触发解绑(全局触发。不严谨)
    //     console.log('useEffect=>hello 你来了！ Index页面');
            //解绑函数
    //     return (() => {
    //         //Index被注销时触发解绑
    //         console.log('hello 你走了！ Index')
    //     })
    // });

    //解决上述问题
    //传入useEffect的第二参数:
    //1、如果当数组中包含的当前组件(function)的状态并发生变化时才触发解绑函数(即由当前组件的状态改变触发解绑),
    //2、空数组代表离开当前组件或组件被销毁时才执行解绑。
    //3、区别:上面的useEffect方法是当前页面的任何状态改变时都会触发解绑,
    //        当前的useEffect只在其组件被销毁时触发解绑。关键在于参数2
    //        参数2为空数组时也意味著useEffect只执行一次(即组件加载时执行)
    //这样就实现了'组件将要挂载'生命周期函数的作用?
    useEffect(() => {
        console.log('useEffect=>hello 你来了！ Index页面');
        //Index被注销时触发解绑
        return (() => {
            console.log('hello 你走了！ Index');
        })
    },[])
    return <h2>baidu.com</h2>
}

function List() {
    //这种写法下，只要页面中的任何状态发生改变都会执行useEffect，参照Index组件
    useEffect(() => {
        console.log('useEffect=>hello 你来了！ List页面');
    })
    return <h2>List Page</h2>
}

//次作用(区别于主业务逻辑)--在生命周期里做的事都属于次作用，
//useEffect代表了componentDidUpdate和componentDidMount两个函数
function Exp_useEffect () {
    const [count,setCount] = useState(0);

    //useEffect是异步的
    useEffect(() => {
        console.log('useEffect相当于组件生命周期-挂载后和更新后函数')
        //解绑函数
        return(() => {
            console.log('=================')
        })
        // 当count改变时触发解绑函数
    },[count])

    //打码执行流程:首先执行redern即return的返回，然后在根据情况执行hook
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click me</button>

            {/*路由*/}
            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list'>列表</Link></li>
                </ul>
                <Route path='/' exact component={Index}/>
                <Route path='/list/' component={List}/>
            </Router>
        </div>
    )
}

export default Exp_useEffect;
