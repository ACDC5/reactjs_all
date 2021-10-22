import React, {useEffect, useState,Component} from "react";
import 'antd/dist/antd.css';
// import {Input,Button,List} from "antd";
import {store} from './Index';
// import {ADDONCE, DELETEITEM, CHANGEINPUT, GETDATA} from'./actionType';
import TodoListUI from "./TodoListUI";
// import axios from 'axios';
import {changeInputAction, addItemAction, deleteItemAction,getTodoList,getInitDataAction} from './actionCreators'

//代码展示了redux的基本流程
//redux学习:redux用于react状态的管理，即数据的管理,保持数据的一致性(单向流)

export default class TodoList extends Component{
    // const {inputValue,list} = store.getState();
    // //实际上可以不用useState，直接用上一行代码的值
    // const [data,setData] = useState({inp:inputValue,val:list})

    constructor(props) {
        super(props);
        this.state = store.getState()

        //订阅模式(可以理解为只要store中的state变化了就自动执行订阅方法，以使组件更新),使reducer返回的新state加载到组件中
        //不订阅不会重新设置组件state
        store.subscribe(this.myStoreChange)

        //TODO 在构造器中设置绑定函数的this，因为changeInputValue函数写在了组件外，所以以下代码在构造器为其绑定this是不成功的
        // this.changeInputValue = this.changeInputValue.bind(this)
        //普通函数调用是最好用bind绑定this，或者在构造器中绑定。尽管当普通函数写在组件
        //内时this.func能成功执行函数，但函数内的this是没有定义的所以请在调用时绑定this，或者
        //在组件加载时绑定(构造器中绑定)，或使用匿名函数;
        this.generalFunc = this.generalFunc.bind(this);
    }

    //远程获取数据，
    // componentDidMount() {
    //     axios.get('https://www.easy-mock.com/mock/5eac2ef0a9af2438fc69ee42/reactOne/Xiaojiejie')
    //         .then(res => {
    //             console.log('get data success：',res.data)
    //             this.getListData(res);
    //         }).catch(err => {
    //             console.log(err+"获取数据失败")
    //     })
    // }

    //TODO 17 bug获取数据失败(原因:网络问题)
    componentDidMount() {
        //获取action，在这里获取的action是一个函数，
        // 之前的增删和监听文本框操作的action是对象
        const action = getTodoList();
        //getTodoList()的作用是起到中间件的作用：异步获取数据作action.value和action.type。
        // 因为reducer只能写纯函数，异步获取数据不能写在其中
        //获取action后调用dispatch(将最新获取到的state推送到组件中，以实现数据的更新)
        store.dispatch(Object(action))
    }

    render() {
        return(
            <>
                {/*<div>*/}
                {/*    /!*直接使用来自redux仓库拿到的值*/}
                {/*(store.getState().inputValue)也可以拿到值*!/*/}
                {/*    <Input placeholder={this.state.inputValue}*/}
                {/*           style={{width:'250px',marginRight:'10px'}}*/}
                {/*           onChange={changeInputValue.bind(this)}*/}
                {/*        // 文本框的值绑定了state，需要定义订阅模式，以便实时更新值*/}
                {/*           value={this.state.inputValue}*/}
                {/*    />*/}
                {/*    <Button type='primary' onClick={addItem.bind(this)}>增加</Button>*/}
                {/*</div>*/}
                {/*<div style={{margin:'10px',width:'300px'}}>*/}
                {/*    <List*/}
                {/*        bordered*/}
                {/*        dataSource={this.state.list}*/}
                {/*        renderItem={(item,index)=>(<List.Item onClick={deleteItem.bind(this,index)}>{item}</List.Item>)}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*//将以上UI代码抽离为一个子组件*/}
                <TodoListUI
                    inputValue={this.state.inputValue}
                    changeInputValue={changeInputValue.bind(this)}
                    list={this.state.list}
                    //因为addItem方法定义在组件外，无法在构造器为其绑定this，所以在调用时为其绑定this
                    onButt={addItem.bind(this)}
                    delete={deleteItem.bind(this)}
                    func={this.generalFunc}
                />
            </>
        )
    }

    myStoreChange = () => {
        // console.log('store发生变化后自动获取更新后的state。',this)
        //从store拿到所有state
        this.setState(store.getState());
    }

    generalFunc() {
        // console.log('普通函数的this:'+this+'写在组件内的func可以在构造器中绑定this？',this)
    }
}

//添加数据
function addItem() {
    // console.log('-----------添加项',this)
    const action = addItemAction()
    store.dispatch(action);
}

//TODO 删除存在问题，总是删除下标为0的记录(已修复)
//点击数据时删除数据
function deleteItem(index) {
    // console.log('-----------删除项下标',index)
    const action = deleteItemAction(index)
    store.dispatch(action)
}

//获取文本框实时输入的值并更新到store
function changeInputValue(e) {
    console.log(e.target.value,this+':)')
    //准备向store添加数据:数据的类型和值
    // const action = {
    //     type:CHANGEINPUT,
    //     value:e.target.value
    // }
    //比较模块化的写法，将action的逻辑抽出写在一个单独的文件中
    const action = changeInputAction(e.target.value);
    //执行添加到store
    store.dispatch(action);
}

