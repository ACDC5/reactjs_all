import React from "react";
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import List from './pages/List';
import Index from './pages/Index';
//fun组件会引入会是黄色...
import Home from './pages/Home';
import Level from "./nested_route/Level";
import "./nested_route/level.css";
import Video from "./nested_route/Video";
import JobMarket from "./nested_route/workplace/JobMarket";

function AppRouter() {
    // return (
    //     TODO router的一般写法,传参,精确匹配路径,重定向等demo
    //     <Router>
    //         <ul>
    //             <li><Link to='/'>首页</Link></li>
    //             <li><Link to='/list:123'>列表</Link></li>
    //             <li><Link to={'/home'}>家</Link></li>
    //         </ul>
    //         {/*exact精确匹配:url路径中只有一个 / 才能匹配到Index页面
    //         http://localhost:3000/ 浏览器地址栏不显示第一个/符号，复制到
    //         别的地方就能看到所有url字符*/}
    //         <Route path='/' exact component={Index}></Route>
    //         {/*router传值的步骤:设置规则---传递值---接收值---显示内容*/}
    //         {/*router动态传值:设置规则，路径list后面必需有参数才能访问list页面*/}
    //         <Route path='/list:id' component={List}></Route>
    //
    //         {/*默认加载的首页本为Index页面,但在Index页面设置重定向到Home页面后，每次
    //         加载index页面都会重定向至home页面.(有个小bug 现在没法进入index页面了,有空加个if)*/}
    //         <Route path='/home' component={Home}></Route>
    //     </Router>
    // )


    //动态配置路由：模拟后台传送的数据
    let routeConfig = [
        {path:'/',title:'博客首页',exact:true,component:Level},
        {path:'/video',title:'视频教程',exact:false,component:Video},
        {path:'/workplace',title:'职场技能',exact:false,component:JobMarket},
    ]
    return(
        //TODO 演示router的嵌套路由(导航)
        <Router>
            <div className='mainDiv'>
                <div className='leftNav'>
                    <h3>一级导航</h3>
                    <ul>
                        {
                            routeConfig.map((item,index) => {
                                return <li key={index}><Link to={item.path}>{item.title}</Link></li>
                            })
                        }
                        {/*不再写死配置*/}
                        {/*<li><Link to='/'>博客首页</Link></li>*/}
                        {/*<li><Link to='/video'>视频教程</Link></li>*/}
                        {/*<li><Link to='/workplace'>职场技能</Link></li>*/}
                    </ul>
                </div>

                <div className='rightMain'>
                    {
                        routeConfig.map((item,index) => {
                            return <Route key={index} path={item.path} exact={item.exact} component={item.component} />
                        })
                    }
                    {/*<Route path='/' exact component={Level}/>*/}
                    {/*<Route path='/video' component={Video} />*/}
                    {/*<Route path='/workplace' component={JobMarket} />*/}
                </div>
            </div>
        </Router>
    )

}

export default AppRouter;
