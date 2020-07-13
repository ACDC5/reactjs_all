import React ,{Component} from "react";
import {Input,Button,List} from "antd";
import {store} from './MyStory';
// import PropType from 'prop-types';

class MyTodoList extends Component{
    constructor(props) {
        super(props);
        this.state=store.getState();
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }

    render(){
        return (
            <>
                <Input
                    style={{width:'250px'}}
                    placeholder={this.state.inpValue}
                    onChange={this.checkInputValue}
                    value={this.state.inpValue}
                />
                <Button type='primary'
                        onClick={this.addItem}
                >增加</Button>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,sequence) => (
                            <List.Item onClick={this.deleteItem.bind(this,sequence)}>{item}</List.Item>
                        )}
                    />
                </div>
            </>
        )
    }

    checkInputValue = (e) => {
        const action = {
            type:'checkInputValue',
            value:e.target.value
        }
        store.dispatch(action);
    }

    addItem = () => {
        const action = {
            type:'addItem',
            value:this.state.inpValue
        }
        store.dispatch(action);
    }

    deleteItem(index) {
        console.log(index)
        const action = {
            type:'deleteItem',
            value:index
        }
        store.dispatch(action);
    }
}

//只有在组件接收props时才能用
// MyTodoList.prototypes = {
//     inpValue:PropTypes.string,
//     list:PropType.array
// };
export default MyTodoList;
