import React, {Component} from 'react';
import Search from "./Search";
import List from "./List";

// https://www.bilibili.com/video/BV1wy4y1D7JT?p=71
/*模拟搜索git用户信息的案例。

* 兄弟间的传值不再依赖他们共同的父组件，而是使用消息订阅和发布技术
* (由此可以将组件自身的state放在组件本身，而不是像之前那样放在组件共同的父组件中)。
*
* 订阅和发布不仅适用与于兄弟组件的通信，任何组件间的数据通信都适用
* (没有组件层级的限制)*/
class GitApp extends Component {

    render() {
        return (
            <div>
                {/*搜索组件*/}
                <Search/>
                {/*内容展示组件*/}
                <List/>
            </div>
        );
    }
}

export default GitApp;
