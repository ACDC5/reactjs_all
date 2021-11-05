import React, {Component} from 'react';
import UseSetState from './1_setState/UseSetState'
import UseStateDemo from "./3_hooks/UseStateDemo";
import UseEffectDemo from "./3_hooks/UseEffectDemo";
import UseRefDemo from "./3_hooks/UseRefDemo";
import FragmentDemo from "./4_fragment/FragmentDemo";
import Exp_useContext from "../hooks/Exp_useContext";
import ContextDemo from "./5_context/ContextDemo";
import PureComponentDemo from "./6_pureComponent/PureComponentDemo";
import RenderPropsDemo from "./7_renderProps/RenderPropsDemo";

class ExtensionApp extends Component {
    render() {
        return (
            <div>
               <UseSetState/>
               <br/>
               <hr/>

               {/*hooks*/}
               <UseStateDemo/>
               <br/>
               <hr/>

               <UseEffectDemo/>
                <br/>
                <hr/>

                <UseRefDemo/>
                <br/>
                <hr/>

                {/*Fragment组件的使用*/}
                <FragmentDemo/>
                <br/>
                <hr/>

                {/*Context的使用*/}
                <ContextDemo/>
                <br/>
                <hr/>

                <PureComponentDemo/>
                <br/>
                <hr/>

                <RenderPropsDemo/>
            </div>
        );
    }
}

export default ExtensionApp;
