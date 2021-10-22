import React,{Component,Fragment} from "react"
import axios from 'axios';
import XiaojiejieItem from "./XiaojiejieItem";
import Boss from './Boss';
import style from './style.css';
import Example from "./hooks/Example";
import Exp_useEffect from "./hooks/Exp_useEffect";
import Exp_useContext from "./hooks/Exp_useContext";
import Exp_useReducer from "./hooks/Exp_useReducer";
import Exp_useReducer2_3_summary from "./hooks/Exp_useReducer2_3_summary";
import Exp_useMemo from "./hooks/Exp_useMemo";
import Exp_useRef from "./hooks/Exp_useRef";
import MyHooks from "./hooks/Exp_myHooks";
import AppRouter from "./router/AppRouter";
import TodoList from "./redux/TodoList";
import MyTodoList from "./practicePoints/redux_todoList/MyTodoList";
import {Button} from "antd";
import Js from "./Js";
import MyAjax from "./base/MyAjax";
import { object } from "prop-types";

let fs = require('fs')

//react学习
class Xiaojiejie extends Component{
    //在某一时刻，可以自动执行的函数(即可当做 生命的周期函数)
    //构造器是es6的语法，但它的确在启动时初始化了组件，可以理解成组件
    //生命周期的挂载，即初始化
    constructor(props) {
        super(props);
        this.state = {
            word:'',
            list:['中药泡脚','软式推背'],
            child:false
        }
    }

    //此生命周期函数用于初始化组件，只执行一次。页面加载前可以做的一些动作可以放在这个函数，查询数据等动作
    //此函数已更名至UNSAFE_componentWillMount
    // componentWillMount() {
    //     console.log('componentWillMount------组件将要挂载到页面的时刻');
    // }

    //此生命周期函数用于初始化组件，只执行一次。载页面加载后可以做的一些动作可以放在这个函数,关闭流之类的
    // componentDidMount() {
    //      axios.get('https://www.easy-mock.com/mock/5eac2ef0a9af2438fc69ee42/reactOne/Xiaojiejie')
    //          .then((res) => {
    //          console.log('axios get data 成功:'+JSON.stringify(res))
    //              this.setState({list:res.data.data})
    //      })
    //          .catch((error) =>{console.log('获取数据失败:'+JSON.stringify(error))})
    //     console.log('componentDidMount------组件挂载完成的时刻');
    // }

    //只在组件(具体的说是组件的状态)更新时执行
    //必需返回一个布尔值,true代表执行后续所有的生命周期函数
    // shouldComponentUpdate() {
    //     console.log('1 shouldComponentUpdate-----组件更新时执行');
    //     return true;
    // }

    //页面更新前执行该函数。在shouldComponentUpdate函数反回true时才会执行
    // componentWillUpdate() {
    //     console.log('2 componentWillUpdate-----组件更新前执行');
    // }

    //页面更新后前执行该函数。在shouldComponentUpdate函数反回true时才会执行
    // componentDidUpdate() {
    //     console.log('3 componentDidUpdate-----组件更新完成后');
    // }

    //因为这里是顶层组件，所以该函数不会执行，在他的子组件中调用时会执行
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps');
    // }


    //获取用户输入的值
    // inputChange(e){
    //获取用户输入的值
    // this.setState({word:e.target.value});
    // console.log('捕捉到的值: '+this.state.word);
    // console.log(this);
    // };

    //测试孙子组件调用爷爷组件的状态值(调用函数)
    test = () => {
        const {child} =this.state
        this.setState({child:child ? false :true})
    }
    //获取用户输入的值
    inputChange(){
        // this.state.word = e.target.value;
        //使用ref获取用户输入的值，使用ref更具可读性(当前函数不用再传递参数)
        this.setState({word:this.input.value});
        // console.log('捕捉到的值: '+this.state.word);
        // console.log(this);
    }

    //添加数据
    addList(){
        const {list} = this.state
        if (this.state.word === null || this.state.word === '') {
            alert('空值无法添加，请输入任意字符')
        } else {
            //用剩余参数取到list状态的所有值，并将用户输入的值存入末尾，以此构建一个新的数据，并赋给list状态
            this.setState({
                list:[...list,this.state.word],
                //添加完后设置输入框为空
                //TODO Bug输入框中的值添加完后实际已经被清除，但框中的文字没有被清除(已解决.原因:只清除了state中存储的值，没有清除文本框中的值)
                word:''
            })
            //TODO 添加完后，清除文本框中的值
            this.input.value = ''

            // console.log(this.ul.querySelectorAll('li').length);
            //TODO 18 part 报错
        }
    };

    //删除数据
    deleteItem(index){
        //这样做也可实现删除数据的功能，但react不准许怎么做。react禁止直接操作state数据。因为随着时间推移这将影响性能
        // this.state.list.splice(index,1)
        // this.setState({
        //     list:this.state.list
        // });

        // console.log('被删除元素的下标'+index);
        let list = this.state.list;
        // 参数1指定要删除的元素的下标，参数2声明要删除的数量。该函数返回删除元素后的数组
        list.splice(index,1);
        this.setState({list:list})
    }


    //每当状态改变的时候触发render
    render() {
        const {child} = this.state
        return(
            //当我们不需要最外层的包裹层时可以使用Fragment替代
            <Fragment>
                <div>
                    <input
                        onChange={this.inputChange.bind(this)}
                        //ref
                        ref={(input) => {this.input=input}}
                    />
                    <button onClick={this.addList.bind(this)}>添加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                           return(
                                //   不加key控制台会给警报
                                // <li key={index+item} onClick={this.deteleItem.bind(this,index)}>
                                //      {item}
                                //   </li>

                               // 将注释掉代码(数据展示)单独拆分成一个组件
                               <div key={index+item}>
                                   <XiaojiejieItem
                                       avName='三十秒上火星'
                                       content={item}
                                       index={index}
                                       //向子组件传递方法,然后通过传入的函数来操作
                                       //父组件的数据
                                       delete={this.deleteItem.bind(this)}
                                       childFun={this.test}
                                   />
                               </div>
                           );
                        })
                    }
                </ul>

                {/*<Boss/>*/}


                <p>---------*Start Hooks*----------</p>
                <Example/>
                <br/>
                <br/>

                <p>-----*useEffect*-----</p>
                <Exp_useEffect/>
                <br/>
                <br/>

                <p>------*useContext*-----</p>
                <Exp_useContext/>
                <br/>
                <br/>

                <p>------*useReducer*-----</p>
                <Exp_useReducer/>
                <br/>
                <br/>

                <p>------*useReducer和useContext的结合使用*-----</p>
                <Exp_useReducer2_3_summary/>
                <br/>
                <br/>

                <p>------*useMemo*-----</p>
                <Exp_useMemo/>
                <br/>
                <br/>

                <p>------*useRef*-----</p>
                <Exp_useRef/>
                <br/>
                <br/>

                <p>------*useMyHooks*-----</p>
                <MyHooks/>
                <br/>
                <p>---------*End Hooks*----------</p>

                <p>------*BrowserRouter as Router*-----</p>
                <p>------*router目录下的每一个文件夹都是一个小场景*-----</p>
                <AppRouter/>
                <br/>
                <br/>

                <p>------redux------</p>
                <TodoList/>
                <br/>

                <p>:)-----强化part------(:</p>
                {/*reduce的store只能存在一个，需要将练习时写的注释掉*/}
                {/*<MyTodoList/>*/}
                <br/>

                <p>:)-----js world------(:</p>
                <Js/>
                <br/>

                <p>:)-----web req------(:</p>x
                <MyAjax/>

            </Fragment>
        );
    }


}

export default Xiaojiejie
