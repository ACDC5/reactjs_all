import {applyMiddleware, compose, createStore} from "redux";
import {combineReducers} from "redux";
import countReducer from '../test_redux/reducers/count'
import personReducer from "../test_redux/reducers/person";

// 提供中间件后store才能识别异步action
import thunk from "redux-thunk";

//使浏览器的redux插件生效
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// 合并多个reducers
const allReducer = combineReducers({
    countReducer,//key-value同名 触发对象简写
    personReducer
})

export default createStore(allReducer,composeEnhancers(applyMiddleware(thunk)))


