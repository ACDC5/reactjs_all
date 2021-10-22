import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoList from "./redux/TodoList";
import {Provider} from 'react-redux';
import {store} from './redux/Index'

//react-redux只是大概了解学习了一下，没有动手写(P21-24)
//被Provider包裹的组件都能获取到store中的state,
//然后再对应的组件中建立连接器connect(我没有写)
// const App=(
//     <Provider store={store}>
//         <TodoList/>
//     </Provider>
// )

//获取真实的节点root，该节点在public文件夹的index.html文件；
// 并将写好的组件挂到该节点(渲染虚拟DOM到页面)
ReactDOM.render(<App/>,document.getElementById('root'));
