import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addPersonAction} from '../test_redux/action/person'
import personReducer from "../test_redux/reducers/person";

class Person extends Component {

    addPerson = () => {
        // 获取用户输入的信息
        const name = this.nameNode.value
        const age = this.ageNode.value

        // 将用户输入的信息打包成一个对象
        const personObj = {id:Date.now(),name,age}//对象的key-value同名时可简写
        this.props.person(personObj)

        //添加完后将文本框设置为空
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h2>我是Person组件;上方组件的求和为:{this.props.countSum}</h2>
                <input ref={c => this.nameNode = c} type='text' placeholder='输入名字'/>&nbsp;
                <input ref={c => this.ageNode = c} type='text' placeholder='输入年龄'/>&nbsp;
                <button onClick={this.addPerson}>添加</button>

                <ul>
                    {
                        this.props.personObj.map(item => {
                            return <li key={item.id}>姓名：{item.name} 年龄：{item.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

//映射状态，参数state代表的是store文件中的
const mapStateToProps = state => ({
    personObj:state.personReducer,//从person的reducer中拿到要添加的人员信息
    countSum:state.countReducer//从其他组件的reducer拿到数据并使用
})

// connect方法的第二个参数:映射操作状态的方法，(这里和RN_WanAndroid项目不一样)
const mapDispatchToProps = (dispatch) => ({//connect调用此回调函数时，connect会传入dispatch方法
    person:data => dispatch(addPersonAction(data))
})


//TODO 可查看Count组件connect的简写方式
export default connect(mapStateToProps,mapDispatchToProps)(Person);
