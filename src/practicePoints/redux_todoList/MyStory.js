import React ,{Component}from 'react';
import {createStore} from "redux";
import MyReducer from "./MyReducer";

export let store = createStore(
    MyReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
