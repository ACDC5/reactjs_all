import React, {Component} from 'react';
import Child from "./Child";

//错误边界:https://www.bilibili.com/video/BV1wy4y1D7JT?p=125
/**getDerivedStateFromError
 * 理解:用来捕获后代组件的错误，渲染除备用页面.
 *
 *1 只能捕获后代组件生命周期(如子组件的render)产生的
    错误;
  2 不能捕获自己组件产生的错误和其他组件在合成
    事件、定时器中产生的错误

 * */
class Parent extends Component {

    state = {hasError:''}//用于标识组件是否发生错误

    // getDerivedStateFromError是一个生命周期函数,类似生命周期函数getDerivedStateFromProps

    /**只要当前组件的子组件发生错误，都会触发调用此函数,并携带错误信息
     * 该函数必须返回一个对象，其中包含错误信息*/
    static getDerivedStateFromError(error) {
        console.log('父:我的子组件出错了',error)
        //在render()之前触返回新的state
        return {hasError:error}
    }

    //当子组件发生错误后会调用此生命周期函数，
    // 此函数可配合上面的函数，不是必须的
    componentDidCatch(error, errorInfo) {
        console.log('此处统计错误,返回给服务器，用于通知后台修复bug')
    }

    render() {
        const {hasError} = this.state
        return (
            <div>
               <h1>我是Parent组件</h1>
                {
                    /**为啥只是短暂的展示了正常页面，
                     * 因为getDerivedStateFromError()
                     * 只有用在生产环境才能正常工作；
                     * 在开发环境，最终依然会出现错误
                     * 在展示的页面。*/

                    hasError ? '子组件发生错误' : <Child/>
                }
            </div>
        );
    }
}

export default Parent;
