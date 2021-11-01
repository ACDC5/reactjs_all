import {applyMiddleware, createStore} from "redux";
import countReducer from '../test_reducer/count_reducer'

// 提供中间件后store才能识别异步action
import thunk from "redux-thunk";

export default createStore(countReducer,applyMiddleware(thunk))


