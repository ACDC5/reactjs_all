// 想要使用共享值需要引入useContext
import React, {useContext}from "react";
import {ColorContext,UPDATE_COLOR} from './Exp_useReducer2_4_color';


function Exp_useReducer2_2_buttons() {
    //在共享数据容器ColorContext中取到共享值dispatch
    const {dispatch} = useContext(ColorContext);
    return(
        <div>
            {/*点击后字体变换颜色*/}
            <button onClick={() => {dispatch({type:UPDATE_COLOR,color:'red'})}}>红色</button>
            <button onClick={() => {dispatch({type:UPDATE_COLOR,color:'yellow'})}}>黄色</button>
        </div>
    );
}

export default Exp_useReducer2_2_buttons;
