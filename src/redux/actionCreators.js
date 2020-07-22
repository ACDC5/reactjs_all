//TODO 11
//将action对象独立成一个文件
import {CHANGEINPUT, ADDONCE, DELETEITEM, GETDATA} from './actionType'
import axios from "axios";
import {element} from "prop-types";

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
        let tet = 'string';
        let test = 'shah:'+tet
        tet = test
        console.log(tet,'，'+test+'ddd'+typeof null)
        console.log(typeof undefined)
        //'https://www.easy-mock.com/mock/5eac2ef0a9af2438fc69ee42/reactOne/Xiaojiejie' 服务器不稳定
        axios.get('https://api.github.com/users/acdc')
            .then((res) => {
                let obj = res.data;
                let arr = new Array();
                //将对象转为数组
                for (let i in obj) {
                    let element = NaN;
                    //根据key获取value
                    element = obj[i];
                    if (element === "" || element ===false ) {
                        element = '（无值or false）千山鸟飞尽'
                    }
                    //TODO 已解决bug-1 获取的数据有关键字null，在其他地方引起报错，改变null值
                    if (element === null) {
                        element = '(null)独钓寒江雪'
                    }
                    element = i.concat(' :  ') + element;
                    arr.push(element);
                }
                const action = getInitDataAction(arr);
                dispatch(action)
            }).catch(err => {
                console.log('获取数据失败',err)
            })
    }
}
