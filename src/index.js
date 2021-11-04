import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//2020年4月写的，有点乱
/*import TodoList from "./redux/TodoList";
import {Provider} from 'react-redux';
import {store} from './redux/Index'*/

//2021-10-27
// import story from "./myRedux/test_story/story";

//2021-10-28
// import story from "./myRedux_v2/test_story/story";

//2021-11-1
// import story from "./myRedux_v3_asyncAction/test_story/store";

//2021-11-3
import story from "./myRedux_v4_react-redux/test_story/store";

//react-redux只是大概了解学习了一下，没有动手写(P21-24)
//被Provider包裹的组件都能获取到store中的state,
//然后再对应的组件中建立连接器connect(我没有写)
// const App=(
//     <Provider store={store}>
//         <TodoList/>
//     </Provider>
// )

// 当reducer没有更新状态时，正常的加载应用(如第一次加载应用等)
ReactDOM.render(<App/>,document.getElementById('root'));


/**redux只负责状态的管理，页面的更新需要自己去管；所以:reducer更新状态时(等于它发布了消息，
而我们把监听写在应用入口处，用于订阅reducer的state发布/更新，从而触发相应页面的更新；)*/

//TODO 一劳永逸的办法，将redux监听回调写在应用的入口文件，只要redux的某个状态改变，
//TODO 就重新渲染App组件(不会有效率问题，react的diff算法只更新state改变的组件)
story.subscribe(() => {

    //获取真实的节点root，该节点在public文件夹的index.html文件；
    // 并将写好的组件挂到该节点(渲染虚拟DOM到页面)
    ReactDOM.render(<App/>,document.getElementById('root'));
})
