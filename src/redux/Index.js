import {createStore} from "redux";
import reducer from "./store/reducer";

export const store = createStore(
    reducer,
    //使浏览器的redux插件生效
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

