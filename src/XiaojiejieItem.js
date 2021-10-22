import React,{Component} from "react";
import PropTypes from 'prop-types';
import XiaojiejieItemChild from "./XiaojiejieItemChild";


//组件拆分
class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        //在构造器中绑定函数可提升程序的性能
        this.handleClick=this.handleClick.bind(this);
    }

    // 在shouldComponentUpdate函数反回true时才会执行
    // componentWillUnmount() {
    //     console.log('4 componentWillUnmount------组件将要被删除时执行')
    //     //TODO 21 end
    // }

    //避坑:父组件第一次render并向子组件传属性时,
    // 该函数是不会执行的，随后父组件的render更新并向子组件传递属性时，才会执行
    //该函数
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps------我是子组件');
    // }

    //实际应用场景，每当文本框中的内容发生变化时
    //是不需要更新子组件的，为了提升性能,使用该生命周期进行区分
    //参数1:将要变化的属性，参数2:将要变化状态
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.content !== this.props.content) {
            // console.log(':)',nextProps.content)
            return true;
        } else {
            // console.log(':(',this.props.content,nextProps.content)
            return false;
        }
    }

    //react中不允许子组件直接向父组件传值
    render() {
        const {childFun} = this.props
        // console.log('child-render')
        return(
            <div>
                <li onClick={this.handleClick}>
                    {this.props.avName},{this.props.avAge}为你推荐~{this.props.content}
                </li>
                <XiaojiejieItemChild multilayer={childFun}/>
            </div>
        )
    }

    handleClick() {
        //react数据从父组件传到子组件后，在子组件中是不能修改的(单向数据流)，数据在子组件中是只读的
        //当一定要在子组件中修改父组件的数据时，可以将父组件的方法传到子组件，子组件通过操作该方法改变
        //父组件传过来的值。

        //使用父组件传递过来的delete函数删除父组件中的数据(即子组件向父组件传值；也可通过此方式改变父传过来的数据)
        this.props.delete(this.props.index);
    }
}

//为了防止业务逻辑错误(应用变大后，传的东西变复杂，会导致一些很难发现的错误)，
// 用protoType校验父组件传递的参数
XiaojiejieItem.protoType={
    //父组件传过来的content属性值必需是string类型的
    content:PropTypes.string,
    index:PropTypes.number,
    delete:PropTypes.func,

    //将avname属性设为为必传
    avName:PropTypes.string.isRequired

}

//为属性设置默认值
XiaojiejieItem.defaultProps={
    avAge:'年龄2022'
    //TODO 16 end
}

export default XiaojiejieItem
