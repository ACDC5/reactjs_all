import React,{Component} from "react";

export default class List extends Component{
    constructor(props) {
        super(props);
        this.state = ({

        })
    }

    render() {
        return(
            <>
                <h2>list大宝剑>显示来自router传递的值{this.state.id}</h2>
            </>
        )
    }

    //在此生命周期中获取父组件(也是router)传递的参数
    componentDidMount() {
        console.log(this.props);
        let temId = this.props.match.params.id;
        this.setState({id:temId})
    }

}
