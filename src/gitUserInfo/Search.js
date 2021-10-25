import React, {Component} from 'react';
import axios from 'axios'

class Search extends Component {

    search = () => {

        const {updateAppStatus} = this.props

        // 获取用户输入
        const {value} = this.keyWordElement

        //发送请求前(点击搜索按钮时):更新App状态(欢迎语和数据加载中的提示)
        updateAppStatus({isFirst:false,isLoading: true})

        // 发送网络请求
        axios.get(`https://api.github.com/search/users?q=${value}`)
            .then(
                res => {
                    console.log('请求返回的数据',res.data)

                    //获取数据后将数据传给父组件，以便其他组件使用数据
                    //获取到用户信息并立即更新父组件状态，同时不再显示‘正在加载’字样
                    updateAppStatus({isLoading: false,users:res.data.items})
                },err => {
                    updateAppStatus({isLoading: false,err:err.message})
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
