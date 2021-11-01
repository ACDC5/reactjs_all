import React,{Component} from 'react';
import Xiaojiejie from "./Xiaojiejie";
import GitApp from "./gitUserInfo/GitApp";
import SubAndSub from './gitUserInfo(pubSub)/GitApp'
import UseFetchDemo from './gitUserInfo(useFetch)/GitApp'
import ReduxApp from "./myRedux/ReduxApp";
import ReduxApp_v2 from "./myRedux_v2/ReduxApp_v2";


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

                {/*2021-10-28 redux案例*/}
                {/*<ReduxApp/>*/}

                {/*2021-10-28 redux案例(版本2)*/}
                <ReduxApp_v2/>
            </div>
        )
    }
}
export default App
