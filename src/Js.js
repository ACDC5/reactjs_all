import React ,{Component} from "react";
import {Button} from 'antd'
export default class Js extends Component{


    render() {
        // var arr=[4]
        // var arr2=new Array(4)
        // console.log(':)'+arr.length+"---"+arr2.length)
        return(
            <>
                <Button type={"primary"} onClick={this.intoJs}>我的世界</Button>
            </>
        );
    }

    intoJs = () => {

    }
}
