import React,{useState} from "react";
//计数器-使用类组件的写法
function Example () {
    //useState 不能在判断条件中使用
    const [count,setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click me</button>
        </div>
    )
}

// class Example extends Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             count:0
//         }
//         // this.addTimes=this.addTime.bind(this);
//     }
//
//     render() {
//         return(
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={this.addTiems}>Click me</button>
//             </div>
//         )
//     }
//
//     addTiems = () => {
//         this.setState({count:this.state.count+1})
//     }
// }

export default Example;
