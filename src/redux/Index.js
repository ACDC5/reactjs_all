import {createStore,applyMiddleware,compose} from "redux";
import reducer from "./store/reducer";
import thunk from 'redux-thunk';

//使浏览器的redux插件生效
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

//使用增强函数。
// 使用redux-thunk中间件(这里不是指react的中间件概念，指的是redux的中间件)来完成数据的请求，
//还有一个redux的中间件叫Redux-saga，都是和thunk相同的用途
// 并将数据的持久化逻辑写在redux而不是写在react组件中
const enhancer = composeEnhancers(applyMiddleware(thunk));

//store是唯一的，只有一个
export const store = createStore(
    reducer,
    //因为createStore只能传2参数，所以对浏览器的redux插件和
    // redux-thunk中间件用增强函数进行了包装
    enhancer
    //使浏览器的redux插件生效
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

