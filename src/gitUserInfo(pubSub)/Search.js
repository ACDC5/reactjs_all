import React, {Component} from 'react';
import axios from 'axios'
import SubPub from 'pubsub-js'

class Search extends Component {

    search = () => {
        // 获取用户输入
        const {value} = this.keyWordElement

        //发送请求前(点击搜索按钮时):更新兄弟组件List状态(欢迎语和数据加载中的提示)
        SubPub.publish('xyz',{isFirst:false,isLoading: true})

        // 发送axios网络请求
        axios.get(`https://api.github.com/search/users?q=${value}`)
            .then(
                res => {
                    //获取数据后，根据发布名称，将数据发布给订阅的组件(无论时兄弟组件或父子组件，只要订阅了)
                    //获取到用户信息并立即List组件状态，同时不再显示‘正在加载’字样
                    SubPub.publish('xyz',{isLoading: false,users:res.data.items})
                },err => {
                    SubPub.publish('xyz',{isLoading: false,err:err.message})
                }
            )
    }

    render() {
        return (
            <section>
                <div>
                    <input ref={c => this.keyWordElement = c} type='text' placeholder='输入关键字搜索'/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        );
    }
}

export default Search;
