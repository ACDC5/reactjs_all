import React, {Component} from 'react';
import axios from 'axios'

// https://www.bilibili.com/video/BV1NJ41197u6?p=2

class MyAxios extends Component {
    render() {
        return (
            <div>
                <h2>axios的基本使用</h2>
                <button style={{color:'#00FFBB'}}>发送get请求</button>
                <button style={{color:'#00FFAA'}}>发送请post求</button>
                <button style={{color:'#00FDDC'}}>发送put请求</button>
                <button style={{color:'#01FFEC'}}>发送delete请求</button>

            </div>
        );
    }
}

export default MyAxios;
