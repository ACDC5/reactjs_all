import React, {Component} from 'react';
import UseSetState from './1_setState/UseSetState'
import UseStateDemo from "./3_hooks/UseStateDemo";
import UseEffectDemo from "./3_hooks/UseEffectDemo";
import UseRefDemo from "./3_hooks/UseRefDemo";

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
            </div>
        );
    }
}

export default ExtensionApp;
