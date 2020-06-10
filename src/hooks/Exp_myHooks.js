import React, {useCallback, useEffect, useState} from "react";

//自定义hooks。获取浏览器窗口大小
//一个单独的功能可以抽出来写成一个hooks当作工具使用
function useWinSize() {
    const [size,setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight,
    });


    //useCallback作用:缓存函数。作为比较useMemo缓存的时状态或属性
    //第二参数为空意味着useCallback只执行一次
    const onResize = useCallback(() => {
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight,
        })
    },[]);


    //参数2为空数组，意味着useEffect只执行一次
    useEffect(() => {
        //创建监听事件
        window.addEventListener('resize',onResize);
        //组件销毁时执行注销监听
        return () => {
            window.removeEventListener('resize',onResize);
        }
    },[]);


    return size;
}


//使用自定义hooks
export default function MyHooks() {
    const size = useWinSize()
    return(
            <div>页面Size:{size.width}X{size.height}</div>
    )
}
