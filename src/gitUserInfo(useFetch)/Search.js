import React, {Component} from 'react';
import axios from 'axios'
import SubPub from 'pubsub-js'

class Search extends Component {

    search = async () => {
        // 获取用户输入
        const {value} = this.keyWordElement
        //发送请求前(点击搜索按钮时):更新兄弟组件List状态(欢迎语和数据加载中的提示)
        SubPub.publish('xyz',{isFirst:false,isLoading: true})

        // 发送fetch请求,fetch符合关‘注分离原则’，可以理解为不是一步拿到数据
        // 在fetch表现为:第一步先联系服务器(这一步是不能直接拿到相应数据的)，第二步再获取数据
        /*fetch(`https://api.github.com/search/users?q=${value}`).
            then(res => {//测试这个then时需要将chrome浏览器设置为离线
                console.log('连接服务器成功:',res)
                //返回服务器响应的数据
                return res.json()
            },
            err => {
                console.log('连接服务器失败',err)
                //若连接服务器失败则中断链式调用
                return new Promise(() => {})//返回一个pending状态的promise，中断后下一个then的调用
            }).
            then(res => {
                console.log('获取数据成功:',res)
            },error => {
                console.log('获取数据失败:',error)
            }
            )*/

        /*优化使用fetch--1 (使用promise的catch方法，即异常穿透)*/
        /*fetch(`https://api.github.com/search/users?q=${value}`).
        then(res => {//测试这个then时需要将chrome浏览器设置为离线
                console.log('连接服务器成功:',res)
                //返回服务器响应的数据
                return res.json()
            }).
        then(res => {
                console.log('获取数据成功:',res)
                SubPub.publish('xyz',{isLoading: false,users:res.items})
                }).
        catch(err => {//异常穿透:前面任意一个then回调失败或异常，都会被catch捕获
                console.log('请求数据失败:',err)
                SubPub.publish('xyz',{isLoading: false,err:err.message})
        })*/

        /*优化使用fetch--2 (使用async/await关键字)*/
        try{
            //连接服务器
            //TODO 如果将链接写错，try/catch无法捕获 链接错误导致的404异常！
            const res = await fetch(`https://api.github.com/search/users?q=${value}`)
            //获取服务器返回的数据
            const data = await res.json()
            SubPub.publish('xyz',{isLoading: false,users:data.items})
        }catch (err) {
            console.log('请求数据失败:',err)
            SubPub.publish('xyz',{isLoading: false,err:err.message})
        }
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
