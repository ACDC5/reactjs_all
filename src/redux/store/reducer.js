import {ADDONCE, DELETEITEM, CHANGEINPUT, GETDATA} from'.././actionType';

//redux的store层。只有store能接收自己的内容，reducer不能
const defaultState = {
    inputValue:'说点啥，写点啥',
    list:[]
}

//redux的reducer层.reducer必需是纯函数(返回的结果必须由自身传入的参数参数决定)
export default (state = defaultState,action) => {
    //Reducer只能接收state，不能改变state
    //action类似广播，告知应用当前action改变了哪些state
    console.log('当前的reducer:'+ state,action)
    if(action.type===CHANGEINPUT){
        //因为state不可更改，所以复制一份state进行更改
        let newState = JSON.parse(JSON.stringify(state));
        //将传过来的值赋值给inputValue(即将数据处理后重新返回给store)
        newState.inputValue=action.value
        return newState
    }

    if (action.type===ADDONCE) {
        //stringify传入的参数将字符串化，parse方法第一个参数只能是字符串，
        //将被解析成JavaScript值，parse方法不允许用逗号作为结尾
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        //添加完成后，清空文本框的内容
        newState.inputValue = '';
        return newState;

    }

    if (action.type===DELETEITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        //删除组件传过来的index，且只删除一位
        newState.list.splice(action.index,1);
        return newState;
    }

    if (action.type===GETDATA) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        return newState;
    }
    return state;
}
