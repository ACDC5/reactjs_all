import React, {Component} from 'react';
import Search from "./Search";
import List from "./List";

// https://www.bilibili.com/video/BV1wy4y1D7JT?p=70
//模拟获取git用户信息的案例。GitApp是案例中所有组件的父组件
class GitApp extends Component {

    state ={
        users:[],
        isFirst:true,//是否为第一次打开页面
        isLoading:false,//是否处于加载中
        err:''//请求失败是返回的错误信息

    }

    updateAppStatus = (stateObj) => {
        this.setState(
                //如果key和value相同时，可只写(value)一个
                //因为这里接收的是一个对象，而state也是一个对象，所以只要传入的对象key和state对象的key对的上即可
                stateObj
        )
    }

    render() {
        return (
            <div>
                {/*搜索组件*/}
                <Search updateAppStatus={this.updateAppStatus}/>
                {/*内容展示组件*/}
                <List {...this.state}/>
            </div>
        );
    }
}

export default GitApp;
