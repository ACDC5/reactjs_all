import React from "react";
import {Input, Button, List} from "antd";
import PropTypes from 'prop-types'

//TODO 13 end UI和业务分离

//UI组件(没有业务逻辑)可以用无状态组件来写,以提升性能

export default function TodoListUI(props) {
    return (
        <>
            <div>
                {/*直接使用来自redux仓库拿到的值
                (store.getState().inputValue)也可以拿到值*/}
                <Input placeholder={props.inputValue}
                       style={{width: '250px', marginRight: '10px'}}
                       onChange={props.changeInputValue}
                    // 文本框的值绑定了state，需要定义订阅模式，以便实时更新值
                       value={props.inputValue}
                />
                <Button type='primary' onClick={props.onButt}>增加</Button>
            </div>
            <div style={{margin: '10px', width: '400px'}}>
                {/*TODO 已解决的bug-1 renderItem无法循环null关键字数据，会报错...被坑了好几天。debug源码才发现是数据的问题
                    解决反方法:在获取数据的地方判断每一个加入数组的数据是否为关键字null，如果是，
                    continue或break,或者替换null关键字*/}
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => props.delete(index)}>{item}</List.Item>)}
                />
                <Button type='default' onClick={props.func}>测试this绑定</Button>
            </div>
        </>
    )
}

// export default class TodoListUI extends Component{
//     render() {
//         return(
//             <>
//                 <div>
//                     {/*直接使用来自redux仓库拿到的值
//                 (store.getState().inputValue)也可以拿到值*/}
//                     <Input placeholder={this.props.inputValue}
//                            style={{width:'250px',marginRight:'10px'}}
//                            onChange={this.props.changeInputValue}
//                         // 文本框的值绑定了state，需要定义订阅模式，以便实时更新值
//                            value={this.props.inputValue}
//                     />
//                     <Button type='primary' onClick={this.props.onButt}>增加</Button>
//                 </div>
//                 <div style={{margin:'10px',width:'300px'}}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item,index)=>(<List.Item onClick={() => this.props.delete(index)}>{item}</List.Item>)}
//                     />
//                     <Button type='default' onClick={this.props.func}>测试this绑定</Button>
//                 </div>
//             </>
//         )
//     }
// }

//TODO 类型检查没生效
TodoListUI.protoType = {
    inputValue: PropTypes.number,
    changeInputValue: PropTypes.func,
    onButt: PropTypes.string.isRequired,
    list: PropTypes.array,
    delete: PropTypes.func
}
