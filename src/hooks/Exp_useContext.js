import React,{useState,createContext,useContext} from "react";

//Step1-创建共享组件(上下文组件)
const CountContext=createContext({});

//Step4-声明子组件,用useContext来接收共享的数据(或者说接收来自父组件的值)
function Counter() {
    //useContext的用法，接收来自createContext提供的值(目前看来也是接收来自父组件的值)
    //useContext可以访问全局状态，避免了组件间一层层的传递
    let count = useContext(CountContext)
    return (<h2>{count}</h2>)
}

function Exp_useContext() {
    const [count,setCount] = useState(0);

    return (
        <div>
            {/*目标:共享/传递count数据*/}
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click me</button>

            {/*Step-2提供器，用于提供/包装或声明需要共享的数据*/}
            <CountContext.Provider value={count}>
                {/*Step-3将数据传递或是说分享到指定的组件*/}
                <Counter/>
            </CountContext.Provider>
        </div>
    );
}

export default  Exp_useContext;
