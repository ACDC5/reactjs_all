import React from "react";
import {Route,Link} from 'react-router-dom';
import Raises from "./Raises";
import GetUP from "./GetUP";

//二级导航
export default function JobMarket() {
    return(
        <>
            <div className='topNav'>
                <div><h2>职场技能页</h2></div>
                <ul>
                    <li><Link to='/workplace/raises'>加薪秘籍</Link></li>
                    <li><Link to='/workplace/getup' >早起攻略</Link></li>
                </ul>
            </div>

            <div className='videoContent'>
                <Route path='/workplace/raises' component={Raises}/>
                <Route path='/workplace/getup' component={GetUP} />
            </div>
        </>
    );
}
