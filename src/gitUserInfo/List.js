import React, {Component} from 'react';
import './ListStyle.css'

class List extends Component {
    render() {
        const {users,isFirst,isLoading,err} = this.props
        return (
            <div className='row'>
                {
                    isFirst ? <h3>欢迎使用github搜索功能</h3> :
                  isLoading ? <h3>正在加载...</h3> :
                        err ? <h3>{err}</h3> :

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
