import React,{Component} from "react";
import {Link,Redirect} from 'react-router-dom';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.stete = ({
            list:[
                {cid:870,title:'维基百科条目1'},
                {cid:296,title:'维基百科条目2'},
                {cid:262,title:'维基百科条目3'},
            ]
        })
        //编程式重定向
        this.props.history.push('/home')
    }
    render() {
        return(
            <>
                {/* 当加载index都将重定向到home；此重定向属于标签式重定向. */}
                {/*<Redirect to='/home' />*/}
                <h2>Index我是渣渣辉</h2>
                <ul>
                    {
                        this.stete.list.map((item,index) => {
                            return(
                                <li key={index}>
                                    <Link to={'/list:'+item.cid}>
                                        标题:{item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        );
    }
}
