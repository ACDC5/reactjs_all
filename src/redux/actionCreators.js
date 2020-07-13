//TODO 11
import {CHANGEINPUT, ADDONCE, DELETEITEM, GETDATA} from './actionType'
import axios from "axios";

//监听文本框输入值
export const changeInputAction = (value) => ({
    type:CHANGEINPUT,
    value
});

//添加数据
export const addItemAction = () => ({
    type:ADDONCE
})

//删除数据
export const deleteItemAction = (index) => ({
    type:DELETEITEM,
    index
})

export const getInitDataAction = (res) => ({
    type:GETDATA,
    res
})

//因为reducer必须是纯函数，不能将获取数据的逻辑直接写在reducer中，
// 所以引入了redux-thunk中间件，在中间件获取进行操作并返回action对象
//返回的action可以在reducer中操作
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5eac2ef0a9af2438fc69ee42/reactOne/Xiaojiejie')
            .then((res) => {
                console.log('get data success：',res.data)
                const data = res.data.data
                const action = getInitDataAction(data);
                dispatch(action)
            }).catch(err => {
                console.log('获取数据失败',err)
            })
    }
}
