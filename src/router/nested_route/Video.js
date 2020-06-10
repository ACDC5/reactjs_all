import React from "react";
import  {Route,Link} from "react-router-dom";
import ReactPage from "./video/ReactPage";
import Flutter from "./video/Flutter";
import Vue from "./video/Vue";
import './level_two.css';

//二级导航页
export default function Video() {
    return(
        <>
            <div className='topNav'>
                <div><h3>视频教程详情页</h3></div>
                <ul>
                    <li><Link to='/video/reactpage'>React教程</Link></li>
                    <li><Link to='/video/flutter'>Flutter教程</Link></li>
                    <li><Link to='/video/vue'>Vue教程</Link></li>
                </ul>
            </div>

            <div className='videoContent'>
                <Route path='/video/reactpage' component={ReactPage} />
                <Route path='/video/flutter' component={Flutter} />
                <Route path='/video/vue' component={Vue} />

            </div>
        </>
    );
}
