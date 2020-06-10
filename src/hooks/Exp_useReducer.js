import React,{useReducer} from "react";

function Exp_useReducer() {
    //useReducer用于控制业务逻辑
    //而useContext可以访问全局状态，避免了组件间一层层的传递
    //useReducer一般和useContext一起使用，达到类似于Redux的效果
    const [count,dispatch] = useReducer((state,action) => {
        switch(action){
            case 'add':
                return state+1;
            case 'sub':
                return state-1;
            default:
                return state;
        }
    },0);

    return (
      <div>
          <h2>现在的分数是{count}</h2>
          <button onClick={() => dispatch('add')}>Increment</button>
          <button onClick={() => dispatch('sub')}>Decrement</button>
      </div>
    );
}

//js实现的Reducer
//参数一控制外部传入的值，action操作值
// function countReducer(state,action) {
//     switch(action.type){
//         case 'add':
//             return state+1;
//         case 'sub':
//             return state-1;
//         default:
//             return state;
//     }
// }

export default Exp_useReducer;
