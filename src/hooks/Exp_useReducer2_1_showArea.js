import React,{useContext} from "react";
import {ColorContext} from "./Exp_useReducer2_4_color";

function Exp_useReducer2_1_showArea() {
    // Step4-声明子组件,用useContext来接收共享的数据(或者说接收来自父组件的值)
    const {color} = useContext(ColorContext)
    return(
        <div style={{color:color}}>字体颜色为{color}</div>
    )
}

export default Exp_useReducer2_1_showArea;
