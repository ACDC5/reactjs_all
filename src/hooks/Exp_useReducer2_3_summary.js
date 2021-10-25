import React from "react";
import Exp_UseReducer2_1_ShowArea from "./Exp_useReducer2_1_showArea";
import Exp_useReducer2_2_buttons from "./Exp_useReducer2_2_buttons";
import {Color} from "./Exp_useReducer2_4_color";

function Exp_useReducer2_3_summary() {
    return(
        <div>
            {/*自定义<Color/>:将数据共享给指定的组件*/}
            <Color>
                <Exp_UseReducer2_1_ShowArea/>
                <Exp_useReducer2_2_buttons/>
            </Color>
        </div>
    );
}

export default Exp_useReducer2_3_summary
