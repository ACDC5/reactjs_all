import React,{Component} from 'react';

//css动画演示
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:true
        }
        this.toToggole = this.toToggole.bind(this);
    }

    render() {
        return(
            <div>
                <div className={this.state.isShow?'show':'hide'}>Boss级人物-比克大魔王</div>
                <div><button onClick={this.toToggole}>召唤Boss</button></div>
            </div>
        )
    }

    toToggole() {
        this.setState({
            isShow:this.state.isShow?false:true
        })

    }
}

export default Boss;
