import React, {Component} from 'react';
import './styles.css'

// https://www.bilibili.com/video/BV1wy4y1D7JT?p=124
class RenderPropsDemo extends Component {
    render() {
        return (
            <div className='aa'>
                <h2>RenderProps的理解和使用</h2>
                {/*在实际开发中有时候会需要用一组件去包裹另一组件，这时候
                    会导致他们之间的值不太好传递；或者在编码的时候才嫩确定
                    他们的之间的关系*/}
                {/*<BB>*/}
                {/*    /!*将CC组件以标签体的形式传给BB组件，以这种*/}
                {/*        方式形成父子关系*!/*/}
                {/*    <CC/>*/}
                {/*</BB>*/}

            {/*    使用renderProps技术 形成父子关系，并且可以向子组件传值*/}
            <BB render={name => <CC name={name}/>} />
            </div>
        );
    }
}

class BB extends Component {
    state = {name:'tom'}//如何将信息传给CC组件

    render() {
        const {name} = this.state
        return (
            <div className='bb'>
                <h3>我是BB组件,我的名字：{name}</h3>
                <h4>
                    {/*执行父组件返回的render函数,该函数返回的是一个组件
                        (相当于预留了一个组件的位置，方便将来插入组件)
                        同时可将当前组件的数据传给返回的(子)组件*/}
                    {this.props.render(name)}
                    {/*{this.props.children}*/}
                </h4>

            </div>
        );
    }
}

class CC extends Component {

    render() {
        return (
            <div className='cc'>
                <h3>我是CC组件,父组件传过的名字:{this.props.name}</h3>
            </div>
        );
    }
}
export default RenderPropsDemo;
