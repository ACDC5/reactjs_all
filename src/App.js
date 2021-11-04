import React,{Component} from 'react';
import Xiaojiejie from "./Xiaojiejie";
import GitApp from "./gitUserInfo/GitApp";
import SubAndSub from './gitUserInfo(pubSub)/GitApp'
import UseFetchDemo from './gitUserInfo(useFetch)/GitApp'
import ReduxApp from "./myRedux/ReduxApp";
import ReduxApp_v2 from "./myRedux_v2/ReduxApp_v2";
import ReduxApp_v3 from "./myRedux_v3_asyncAction/ReduxApp_v3";
import ReduxApp_v4 from "./myRedux_v4_react-redux/ReduxApp_v4";
import ExtensionApp from "./react_extension/ExtensionApp";


class App extends Component{
    render(){
        return(
            <div>
                {/*2020-4-10 react的一些基础料了解*/}
                {/*<Xiaojiejie/>*/}

                {/*2021-10-25搜索github用户案例*/}
                {/*<GitApp/>*/}

                {/*2021-10-26搜索github用户案例(使用消息订阅-发布技术)*/}
                {/*<SubAndSub/>*/}

                {/*2021-10-26搜索github用户案例(请求方式改为:fetch)*/}
                {/*<UseFetchDemo/>*/}



                {/* TODO 写了好几个redux版本(myRedux &v2 & v3)，当需要查看不同版本的效果时，*/}
                {/*  需要在根index改变每个版本store的订阅*/}
                {/*2021-10-28 redux案例*/}
                {/*<ReduxApp/>*/}

                {/*2021-10-28 redux案例(版本2_完整版)*/}
                {/*<ReduxApp_v2/>*/}

                {/*2021-11-1 redux案例(v3_异步action)*/}
                {/*<ReduxApp_v3/>*/}

                {/*2021-11-3 redux案例(终极完整版)*/}
                <ReduxApp_v4/>
                <hr/>
                <br/>
                <br/>

                {/* 2021-11-4 TODO react的扩展知识*/}
                <ExtensionApp/>
            </div>
        )
    }
}
export default App
