import React, {Component} from 'react';


class XiaojiejieItemChild extends Component {
    render() {
        const {multilayer} = this.props
        console.log('child-child-render')
        return (
            <div>
                <button onClick={multilayer}>多层嵌套调用上层数据</button>
            </div>
        );
    }
}

export default XiaojiejieItemChild;
