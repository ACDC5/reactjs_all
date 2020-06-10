// 使用createContext,useReducer构建业务逻辑
import React,{createContext,useReducer} from "react";

//Step1-创建共享组件(上下文组件)
export const ColorContext = createContext({});

export const UPDATE_COLOR = 'UPDATE_COLOR';

const reducer = (state,action) => {
    if (action.type === UPDATE_COLOR) {
        return action.color;
    } else {
        return state
    }

}

//共享数据的color
export const Color = props => {
    const [color,dispatch] = useReducer(reducer,'blue');
    return (
        // Step-2提供器，用于提供/包装或声明需要共享的数据
        <ColorContext.Provider value={{color,dispatch}}>
            {/*Step-3将数据传递或是说分享到指定的组件*/}
            {props.children}
        </ColorContext.Provider>

    );
}
// function Exp_useReducer2_4_color() {
//
// }
//
// export default Exp_useReducer2_4_color;
