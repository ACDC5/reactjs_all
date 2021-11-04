import React, {Component} from 'react';
import Count from "./Count/Count";
import Person from "./Person/Person";
import {Provider} from "react-redux";
import story from "../myRedux_v4_react-redux/test_story/store";

class ReduxApp_v4 extends Component {
    //https://www.bilibili.com/video/BV1wy4y1D7JT?p=109
    render() {
        return (
            <div>
                {/*将所有容器组件需要的store给Provider组件，其会精准将store传给需要的组件*/}
                <Provider store={story}>
                    <Count/>
                    <hr/>
                    <Person/>
                </Provider>
            </div>
        );
    }
}

export default ReduxApp_v4;
