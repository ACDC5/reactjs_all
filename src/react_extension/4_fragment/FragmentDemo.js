import React, {Component,Fragment} from 'react';

class FragmentDemo extends Component {
    render() {
        return (
            /**Fragment标签用于替代多余的包装标签，比如div标签。
             * 使用后，在html结构中Fragment所在的位置它是被丢弃的
             * (即写了等于没写，达到简化html的目的)。
             *
             * Fragment相当于空标签<></>；他们的区别在于
             * Fragment可传入key属性，空标签不能传入任何属性*/
            <Fragment>
                <h1>我是FragmentDemo组件</h1>
            </Fragment>
        );
    }
}

export default FragmentDemo;
