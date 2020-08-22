import React ,{Component} from "react";
import {Input,Button} from 'antd';
import fly from 'flyio';
import axios from 'axios';

export default class MyAjax extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Input
                    placeholder='url'
                />
                <Button type='primary' onClick={this.myFly}>FLY</Button>
            </>
        )
    }

    // xmlHttpRequestGet = () => {
    //     if(window.ActiveXObject){
    //         var newRequest = new ActiveXObject("Microsoft.XMLHTTP")
    //     }else {
    //         var newRequest = new XMLHttpRequest()
    //     }
    //     return newRequest;
    // }

    myFly = () => {
        fly.get('https://video.tudou.com/v/XNDczNTI0NDkyNA==.html?spm=a2h28.8313475.feed.dvideo')
            .then(res => {
                console.log('fly成功： ' ,res.engine.responseText)
            }).catch(err => {console.log('fyl失败： ' ,err)})

        axios.get('https://video.tudou.com/v/XNDczNTI0NDkyNA==.html?spm=a2h28.8313475.feed.dvideo')
            .then(res => {
                console.log('axios成功： ' ,res)
            }).catch(err => {console.log('axios失败： ' ,err)})

        fetch('https://video.tudou.com/v/XNDczNTI0NDkyNA==.html?spm=a2h28.8313475.feed.dvideo')
            .then(res => {
                console.log('fetch成功： ' ,res)
            }).catch(err => {console.log('fetch失败： ' ,err)})
    }
}
