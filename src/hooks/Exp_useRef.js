import React, {useEffect, useRef, useState} from "react";

export default function Exp_useRef() {
    //作用1:useRef可以获取和控制DOM元素(div、input之类的标签)
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.value='意不意外';
        console.log(inputEl)
    }

    //作用2(几乎用不到):保存变量
    //作用2代码演示
    const [text,setText] = useState('xyz');
    const textRef = useRef();
    useEffect(() => {
        //每次text状态改变都保存其值
        textRef.current = text;
        console.log('保存的值:'+textRef.current);
    })
    return(
        <>
            {/*useRef获取DOM元素input*/}
            <input ref={inputEl} type='text'/>
            <button onClick={onButtonClick}>叉叉叉</button>
            <br/>
            <br/>

            <input value={text} onChange={(e) => {setText(e.target.value)}}/>
        </>
    )
}

