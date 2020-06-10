import React,{useState} from "react";
import 'antd/dist/antd.css';
import {Input,Button,List} from "antd";
import {store} from './Index'

//redux学习:redux用于react状态的管理，即数据的管理
//使用阿里云的antd美化UI
// const data = [
//     '早8点开晨会，分配今天的代码任务',
//     '早9点和项目经理开需求沟通会',
//     '晚5点组织人员进行Review代码'
// ]

export default function TodoList() {
    const {inputValue,list} = store.getState();
    //实际上可以不用useState，直接用上一行代码的值
    const [data,setData] = useState({inp:inputValue,val:list})
    return(
        <>
            {console.log(store.getState())}
            <div>
                {/*直接使用来自redux仓库拿到的值
                (store.getState().inputValue)也可以拿到值*/}
                <Input placeholder={data.inp}
                       style={{width:'250px',marginRight:'10px'}}
                       onChange={this.changeInputValue.bind(this)}
                />
                <Button type='primary'>增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={data.val}
                    renderItem={item=>(<List.Item>{item}</List.Item>)}
                />
            </div>
        </>
    )
}

//TODO 07  2分钟
function changeInputValue(e) {
    console.log(e.target.value)
}
