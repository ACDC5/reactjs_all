import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//2020年4月写的，有点乱
/*import TodoList from "./redux/TodoList";
import {Provider} from 'react-redux';
import {store} from './redux/Index'*/

//2021-10-28
import story from "./myRedux/test_story/story";

//react-redux只是大概了解学习了一下，没有动手写(P21-24)
//被Provider包裹的组件都能获取到store中的state,
//然后再对应的组件中建立连接器connect(我没有写)
// const App=(
//     <Provider store={store}>
//         <TodoList/>
//     </Provider>
// )

// 当reducer没有更新状态时，正常的加载应用
ReactDOM.render(<App/>,document.getElementById('root'));


// 当reducer没有更新状态时，正常的加载应用
//TODO 一劳永逸的办法，将reducer监听回调下载应用的入口文件，只要应用的某个状态改变，
//TODO 整个应用的更新(不会有效率问题，react的diff算法只更新state改变的组件)
story.subscribe(() => {
    console.log('#')
    //获取真实的节点root，该节点在public文件夹的index.html文件；
    // 并将写好的组件挂到该节点(渲染虚拟DOM到页面)
    ReactDOM.render(<App/>,document.getElementById('root'));
})
