import React, {Component} from 'react';
import './ListStyle.css'
import PubSub from 'pubsub-js'

class List extends Component {

    state ={
        users:[],
        isFirst:true,//是否为第一次打开页面
        isLoading:false,//是否处于加载中
        err:''//请求失败是返回的错误信息

    }

    /*List组件需要接收数据，所以需在List组件中实现订阅。
    * 组件一挂载即订阅*/
    componentDidMount() {
        /*参数1 订阅消息的名称，需要和发布消息的名称一致
        * 参数2 回调函数:接收到消息后的回调函数，其参数1为发布名称，参数2为发布(传递)的数据*/
        this.token = PubSub.subscribe('xyz',(msg,data) => {
                // console.log('List订阅消息:',msg,data)
                this.setState(data)
            }
        )
    }

    //组件卸载时，取消消息订阅
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users,isFirst,isLoading,err} = this.state
        return (
            <div className='row'>
                {
                    isFirst ? <h3>欢迎使用github搜索功能</h3> :
                  isLoading ? <h3>正在加载...</h3> :
                        err ? <h3 style={{color:'red'}}>{err}</h3> :

                        users.map(userObj => {
                            return(
                                <div className='card' key={userObj.id}>
                                    {/*target属性:新页面在当前页签打开还是在新标签中打开*/}
                                    <a href={userObj.html_url} target='_blank' rel='noopener noreferrer'>
                                        <img alt='headPicture' src={userObj.avatar_url} style={{width:'100px'}}/>
                                    </a>
                                    <p className='card-text'>{userObj.login}</p>
                                </div>
                                )
                        })
                }
            </div>
        );
    }
}

export default List;
