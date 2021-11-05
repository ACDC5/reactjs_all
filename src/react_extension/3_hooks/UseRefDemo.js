import React from 'react';

function UseRefDemo() {

    const myRef = React.useRef()//和之前的React.createrRef()一样，专人专用，其他人要用需在建

    function show() {
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type='text' ref={myRef}/>
            <button onClick={show}>点我提示数据</button>
        </div>
    );
}

export default UseRefDemo;
